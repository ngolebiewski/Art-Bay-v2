
import React, {useState} from 'react';

const Home = ({ onSearch }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
    const username = localStorage.getItem("USERNAME");
  const handleSearch = async (term) => {
    try {
      const response = await axios.get(`/artwork?q=${term}`);
      console.log(response);
      setSearchTerm(term);
      console.log(term);
      setSearchResults(response.data);
      onSearch(term);

    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return(
    <>
    <header>
          {username ? (
      <h1>Welcome, {username}!</h1>
    ) : (
      <h1>Welcome to our site!</h1>
    )}
    
    </header>
    {searchTerm && (
        <p>Showing results for: <strong>{searchTerm}</strong></p>
      )}
    <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </>
  );
};


export default Home;
