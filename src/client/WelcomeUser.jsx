import React from "react";
import { Link } from "react-router-dom";

// Ideally this will take them to the version of the home page that says their name at the top or somthing along those lines
// Or we can remove the button and make it to where this page automatically reidirects after a few seconds

const WelcomeUser = () => {
  return (
    <>
      <h1> Welcome to ArtBay "newUser" !! 🎉</h1>
      <br />
      <Link to="/">
        <button>Continue</button>
      </Link>
    </>
  );
};

export default WelcomeUser;
