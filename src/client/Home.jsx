import React from 'react';

const Home = () => {
  const username = localStorage.getItem("USERNAME");

  return(
    <div>
    {username ? (
      <h1>Welcome, {username}!</h1>
    ) : (
      <h1>Welcome to our site!</h1>
    )}
  </div>
  )
}

export default Home
