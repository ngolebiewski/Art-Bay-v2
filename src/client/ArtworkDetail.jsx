import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from "react-bootstrap";

const ArtworkDetail = () => {
  const { id } = useParams();
  const [artwork, setArtwork] = useState({})
  const [artists, setArtists] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    async function getSingleArtwork() {
      try {
        const { data: foundArtwork } = await axios.get(`/api/art/${id}`)
        setArtwork(foundArtwork)
      }
      catch (error) {
        console.log(error)

      }

    }
    getSingleArtwork()
  }, [id])
  useEffect(() => {
    async function getArtist() {
      try {
        const { data: foundArtwork } = await axios.get("/api/artist")
        setArtists(foundArtwork)
      }
      catch (error) {
        console.log(error)

      }
    }
    getArtist()
  }, [])


  const getArtistName = (artistId) => {
    const artist = artists.find((artist) => artist.id === artistId);
    return artist ? artist.name : 'Unknown Artist';
  };

  const addToCart = async () => {
    try {
      const token = window.localStorage.getItem("TOKEN");
      // Check if the user is authenticated (token exists)
      if (token) {
        const artId = +id;
        const quantity = 1;

        const response = await axios.post('/api/cart', {
          artId,
          quantity,
        },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          
          navigate("/cart");
      } else {
        // Guest user logic like store cart in local storage or prompt to log in
        console.log('Please log in to add items to the cart.');
      }

    }

    catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
  <Container className="justify-content-md-center" >
    
    <Card className="bg-dark text-white m-2" border="info" key={artwork.id}>
    <Row>
    <Col xs={12} md={8}>
      <Card.Img className="m-2" src={artwork.imgUrl} alt={`Artwork titled ${artwork.title}`} style={{maxWidth: "100%", maxHeight: "80vh", objectFit: "contain"}} />
      </Col>
      <Col xs={6} md={4}>
      <Card.Body>
        <Card.Title>
          Title: {artwork.title}
        </Card.Title>
        <Card.Text>
          <Link to={`/artist/${artwork.artistId}`}>
           <h3>Artist: {getArtistName(artwork.artistId)}</h3>
          </Link>
          <p>Description: {artwork.description}</p>
          <p>Price: ${artwork.price}</p>
          <p>Year: {artwork.year}</p>
          <p>Medium: {artwork.medium}</p>
          <p>Dimensions: {artwork.dimensions}</p>
          <p>In Stock: {artwork.inStock ? 'Yes' : 'No'}</p>
          <Button variant="info" onClick={addToCart}>Add to Cart</Button>
        </Card.Text>
      </Card.Body>
      </Col>
      </Row>
    </Card>
   
    </Container>

  )
}

export default ArtworkDetail
