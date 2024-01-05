import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation.jsx';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Artwork from './Artwork.jsx';
import ArtworkDetail from './ArtworkDetail.jsx';
import ArtistDetail from './ArtistDetail.jsx'
import LoginForm from './LoginForm.jsx';
import Register from './Register.jsx';
import WelcomeUser from './WelcomeUser.jsx';
import Cart from './Cart.jsx';
import Checkout from './Checkout.jsx';
import PaymentSuccess from './PaymentSuccess.jsx';
import { useState } from 'react';

const App = () =>{
  const [token, setToken] = useState(window.localStorage.getItem("TOKEN"));

  return (
    <>
     
      <section id="header"> <Header /> </section>

      <section id="navbar"> <Navigation /></section>

      <section id="main">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/artwork' element={<Artwork />} />
          <Route path='/artwork/:id' element={<ArtworkDetail />} /> 
          <Route path='/artist/:id' element={<ArtistDetail />} /> 
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/payment-success' element={<PaymentSuccess />} />
          <Route path='/login' element={<LoginForm setToken={setToken}/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/welcome' element={<WelcomeUser />} />

        </Routes>

      </section>

    </>
  );
}

export default App;
