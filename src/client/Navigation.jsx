import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navigation = ({ user, setToken, onSearch }) => {
  const navigate = useNavigate();
  function handleLogout() {
    window.localStorage.removeItem("TOKEN");
    window.localStorage.removeItem("USERNAME");
    setToken("");
    navigate("/");
  }
  return(
    <>
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/">Art-Bay</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/artwork">Browse</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Art-Bay</Navbar.Brand>
          <Nav className="me-auto">
            
            
          {user ? (
    <div>
    <Link className='nav-link' to='/'>Home</Link>
    <Link className='nav-link' to='/artwork'>Browse </Link>
    <Link className='nav-link' to='/cart'>Cart</Link>
    {/* <Link className='nav-link' to='/checkout'>Checkout</Link> */}
    {/* Maybe Profile or Account page should appear once the user is logged in */}
    <button onClick={handleLogout}>Logout</button>
    <SearchBar onSearch={onSearch} />
</div>) : (
    <div>
    <Nav.Link className='nav-link' to='/'>Home</Nav.Link>
    <Nav.Link className='nav-link' to='/artwork'>Browse </Nav.Link>
    <Nav.Link className='nav-link' to='/login'>Login</Nav.Link>
    {/* <Link className='nav-link' to='/register'>Register</Link> */}
    <Nav.Link className='nav-link' to='/cart'>Cart</Nav.Link>
    <SearchBar onSearch={onSearch} />
</div>
)}



           
          </Nav>
        </Container>
      </Navbar>
      </>

    
  );
};


export default Navigation


// I commented out 2 of the links above^^
// I think 'login' should take the user to 'register' if they click the button on the login page - rather than be its own NAV
// in the same regard, 'checkout' should be within 'cart' and not on the NAV either
// maybe we have a fake 'help' or 'contants' now that we have all this room on the NAV
// or maybe the instead of that we put a search bar?