import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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

}

export default Artwork