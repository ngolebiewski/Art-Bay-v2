import React, {useState} from 'react';

const Home = ({ onSearch }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
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
      <h1>Hello World, welcome to Art-Bay!</h1>
    
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
