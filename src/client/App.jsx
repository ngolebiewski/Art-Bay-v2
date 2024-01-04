import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation.jsx';
import Home from './Home.jsx';
import Artwork from './Artwork.jsx';
import ArtworkDetail from './ArtworkDetail.jsx';
import ArtistDetail from './ArtistDetail.jsx'
import LoginForm from './LoginForm.jsx';
import Register from './Register.jsx';
import Header from './Header.jsx';
import Cart from './Cart.jsx';
import Checkout from './Checkout.jsx';
import { useState } from 'react';

const App = () =>{
  const [token, setToken] = useState(window.localStorage.getItem("TOKEN"));
  // const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term, results) => {
    setSearchTerm(term);
    // setSearchResults(results);
};

  return (
    <>
      <section id="header"> <Header /> </section>

      <section id="navbar"> <Navigation onSearch={handleSearch}/></section>

      <section id="main">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/artwork' element={<Artwork onSearch={handleSearch}/>} />
          <Route path='/artwork/:id' element={<ArtworkDetail />} /> 
          <Route path='/artist/:id' element={<ArtistDetail />} /> 
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/login' element={<LoginForm setToken={setToken}/>} />
          <Route path='/register' element={<Register />} />

        </Routes>

      </section>

    </>
  );
}

export default App;
