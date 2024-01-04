import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ArtworkDetail = () => {
  const { id } = useParams();
  const [artwork, setArtwork] = useState([])
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
  }, [])
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

  return (
   
       <div>
    <img src={artwork.imgUrl} alt={`Artwork titled ${artwork.title}`} style={{ width: '300px', height: '300px' }}/>
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
   
</div>

  )
  }

export default ArtworkDetail