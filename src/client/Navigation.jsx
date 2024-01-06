import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/NavLink';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Navigation = ({ user, setToken, onSearch }) => {
  const navigate = useNavigate();

  function handleLogout(event) {
    event.preventDefault();
    window.localStorage.removeItem("TOKEN");
    window.localStorage.removeItem("USERNAME");
    setToken("");
    navigate("/");
  }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/artwork">Browse</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            {user ? (
              <>
                <NavLink onClick={handleLogout} href="/logout">Logout</NavLink>
                <span className="navbar-text mx-3">Signed in as: <strong>{user.username}</strong></span>
              </>) : (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
              </>
            )}

          </Nav>
          <Form inline className="d-flex">
            <FormControl
              type="text"
              placeholder="Search for Art or Artist"
              className="mr-sm-2"
              onChange={(e) => onSearch(e.target.value)}
            />
            <Button variant="outline-light">Search</Button>
          </Form>
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