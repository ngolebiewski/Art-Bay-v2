import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation.jsx';
import Home from './Home.jsx';
import Artwork from './Artwork.jsx';
import ArtworkDetail from './ArtworkDetail.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Header from './Header.jsx';
import Cart from './Cart.jsx';

const App = () =>{

  return (
    <>
     
      <section id="header"> <Header /> </section>

      <section id="navbar"> <Navigation /></section>

      <section id="main">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/artwork' element={<Artwork />} />
          <Route path='/artwork/:id' element={<ArtworkDetail />} /> 
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

        </Routes>

      </section>

    </>
  );
}

export default App;
