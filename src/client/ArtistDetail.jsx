import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
    <div>
      <h2>{artistData.name}</h2>
      <img src={artistData.imgUrl} alt={`Portrait of ${artistData.name}`} style={{ maxWidth: '50%', height: 'auto' }} />
      <h3>Artworks:</h3>
      <div>
        {artistData.arts.map((artwork) => (
          <div key={artwork.id}>
            <h4>{artwork.title}</h4>
            <img src={artwork.imgUrl} alt={`Artwork titled ${artwork.title}`} style={{ width: '200px', height: '200px' }} />
            <p>{artwork.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistDetail;
