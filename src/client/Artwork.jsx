import React, { useEffect, useState } from "react";
import axios from "axios";

const Artwork = () => {
  const [artwork, setArtwork] = useState([])

  console.log("artwork", artwork)

  useEffect(() => {
    async function getArtwork() {
      try {
        const { data: foundArtwork } = await axios.get("/api/art")
        setArtwork(foundArtwork)
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

      {artwork.map((artwork) => (
        <div key={artwork.id} >
          <h3>Title: {artwork.title}</h3>
          <h3>Artist: {artwork.artist}</h3>
          <p>Description: {artwork.description}</p>
          <img src={artwork.imgUrl} alt={`Artwork titled ${artwork.title}`}  style={{ width: '300px', height: '300px' }}/>
        </div>
      ))}

    </div>



  )

}

export default Artwork