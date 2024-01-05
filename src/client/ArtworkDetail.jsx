import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ArtworkDetail = ({ addCartItem }) => {
  const { id } = useParams();
  const [artwork, setArtwork] = useState({})
  const [artists, setArtists] = useState([])

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

    <div>
      <img src={artwork.imgUrl} alt={`Artwork titled ${artwork.title}`} style={{ width: '300px', height: '300px' }} />
      <h3>Title: {artwork.title}</h3>
      <Link to={`/artist/${artwork.artistId}`}>
        <h3>Artist: {getArtistName(artwork.artistId)}</h3>
      </Link>
      <p>Description: {artwork.description}</p>
      <p>Price: ${artwork.price}</p>
      <p>Year: {artwork.year}</p>
      <p>Medium: {artwork.medium}</p>
      <p>Dimensions: {artwork.dimensions}</p>
      <p>In Stock: {artwork.inStock ? 'Yes' : 'No'}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>

  )
}

export default ArtworkDetail
