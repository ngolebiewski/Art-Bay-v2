import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from "react-bootstrap";

const ArtistDetail = () => {
  const { id } = useParams();
  const [artistData, setArtistData] = useState(null);

  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        const response = await axios.get(`/api/artist/${id}`);
        setArtistData(response.data);
      } catch (error) {
        console.error("Error fetching artist data:", error);
      }
    };

    fetchArtistData();
  }, []);

  if (!artistData) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="m-2" fluid>
      <Card className="bg-dark text-white">
        <Row>
          <Col xs={6} md={4}>
            <Card className="bg-dark text-white m-2" border="info" key={artistData.id}>
              <Card.Body>
                <Card.Title><h3>{artistData.name}</h3></Card.Title>
                <Card.Img src={artistData.imgUrl} alt={`Portrait of ${artistData.name}`} />
              </Card.Body>
            </Card>
          </Col>


          <Col xs={12} md={8}>
            <Card className="bg-dark text-white m-2" border="info">
              <Card.Body>
                <h3>Artworks:</h3>
                <Container fluid className="d-flex flex-row flex-wrap">
                  {artistData.arts.map((artwork) => (
                    <Card className="bg-dark text-white m-2" border="info" style={{ width: '18rem' }} key={artwork.id}>
                      <Card.Body>
                        <Card.Title>{artwork.title}</Card.Title>
                        <Link to={`/artwork/${artwork.id}`}>
                          <Card.Img className="p-1" variant="top" src={artwork.imgUrl} alt={`Artwork titled ${artwork.title}`} />
                        </Link>
                        <Card.Text><p>{artwork.description}</p> </Card.Text>
                      </Card.Body>
                    </Card>
                  ))}
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ArtistDetail;
