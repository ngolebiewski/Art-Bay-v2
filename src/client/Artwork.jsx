import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const Artwork = () => {
  const [artworks, setArtworks] = useState([])



  useEffect(() => {
    async function getArtwork() {
      try {
        const { data: foundArtwork } = await axios.get("/api/art")
        setArtworks(foundArtwork)
      }
      catch (error) {
        console.log(error)

      }
    }
    getArtwork()
  }, [])



  return (
    <div>
      <h1>All Artworks</h1>
      <Container fluid className="d-flex flex-row flex-wrap">
        {artworks.map((artwork) => (
          <Card className="bg-dark text-white m-2" border="info" style={{ width: '18rem', padding: '0' }} key={artwork.id}>
            <Link to={`/artwork/${artwork.id}`}>
              <Card.Img className="p-1 artwork-image" variant="top" src={artwork.imgUrl} alt={`Artwork titled ${artwork.title}`} />
            </Link>
            <Card.Body>
              <Card.Title>
                Title: {artwork.title}
              </Card.Title>
              <Card.Text>
                Price: ${artwork.price}<br />
                In Stock: {artwork.inStock ? 'Yes' : 'No'}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>

  )
  /** 
    return (
      <div>
        <h2>All Artworks</h2>
        {artworks.map((artwork) => (
          <div key={artwork.id}>
            <img src={artwork.imgUrl} alt={`Artwork titled ${artwork.title}`} style={{ width: '300px', height: '300px' }} />
            <Link to={`/artwork/${artwork.id}`}>
              <h3>Title: {artwork.title}</h3>
            </Link>
            <p>Price: ${artwork.price}</p>
            <p>In Stock: {artwork.inStock ? 'Yes' : 'No'}</p>
          </div>
        ))}
      </div>
    )
  */

}

export default Artwork