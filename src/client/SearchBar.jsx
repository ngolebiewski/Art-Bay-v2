import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    try {
    const response = await axios.get(`/api/artwork?q=${searchTerm}`);
    console.log(response);
    onSearch(searchTerm, response.data.data);
  } catch (error) {
    console.error('Error fetching search results:', error);
  }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Artists or Art..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
