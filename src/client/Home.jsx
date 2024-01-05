import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';

const Home =() =>{
  const [index, setIndex] = useState(0);
  const [artworks, setArtworks] = useState([])

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await axios.get('/api/art');
        setArtworks(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchArtworks();
  }, []);


  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={2000}>
    {artworks.map((art, idx) => (
      <Carousel.Item key={idx}>
        <div className="image-container">
          <img
            className="d-block w-100 carousel-image"
            src={art.imgUrl}
            alt={art.title}
          />
        </div>
        <Carousel.Caption className="carousel-caption">
          <h3>{art.title}</h3>
          <p>{art.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>

    // <>
    //   <header>
    //     {username ? (
    //       <h1>Welcome, {username}!</h1>
    //     ) : (
    //       <h1>Welcome to our site!</h1>
    //     )}

      // {/* </header>
      // {searchTerm && (
      //   <p>Showing results for: <strong>{searchTerm}</strong></p>
      // )}
      // <ul>
      //   {searchResults.map((result) => (
      //     <li key={result.id}>{result.name}</li>
      //   ))}
      // </ul> */}
    // </>
  );
}
;


export default Home;
