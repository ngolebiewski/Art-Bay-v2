import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // takes what the user typed in and puts it in the state
            required // must provide username to submit - same for password below
          />
        </label>
        <br />
        <label>
          password
          < br/>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <br />
        <button type="submit"> Login!</button>
        <p>New to ArtBay?</p>
        <Link to="/Register">
          <button>Register!</button>
        </Link>
      </form>
    </>
  );
};

export default LoginForm;
