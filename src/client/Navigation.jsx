import React from "react";
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';


// TODO: Add in welcome line: ie. welcome Dave...or welcome Guest (text tbd)
// TODO: Add in token logic to show login/logout/cart
// TODO: CSS

const Navigation = ({ onSearch }) => {

  return(
    <>
  <nav>
    <Link className='nav-link' to='/'>Home</Link>
    <Link className='nav-link' to='/artwork'>Browse </Link>
    <Link className='nav-link' to='/login'>Login</Link>
    <Link className='nav-link' to='/cart'>Cart</Link>

    <Link className='nav-link' to='/checkout'>Checkout</Link>
    <div className="searchBar-component-container">
      <SearchBar onSearch={onSearch} />
    </div>

    {/* <Link className='nav-link' to='/register'>Register</Link> */}
    {/* <Link className='nav-link' to='/checkout'>Checkout</Link> */}

  </nav>
  </>
  );
};

export default Navigation


// I commented out 2 of the links above^^
// I think 'login' should take the user to 'register' if they click the button on the login page - rather than be its own NAV
// in the same regard, 'checkout' should be within 'cart' and not on the NAV either
// maybe we have a fake 'help' or 'contants' now that we have all this room on the NAV
// or maybe the instead of that we put a search bar?