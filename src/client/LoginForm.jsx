import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const LoginForm = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault(); 
    try {
      const response = await axios.post("/auth/login", {
        username,
        password,
      });

      const { token } = response.data;
      // save token
      localStorage.setItem("TOKEN", token);
      localStorage.setItem("USERNAME", username);
      setToken(token);
      navigate("/");
    } catch (error) {
      if (error.response) {
        console.error("Server Error:", error.response.data);
      } else if (error.request) {
        console.error("Network Error:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <>
      <h2>Sign In</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username
          <br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Login!</button>
        <p>New to ArtBay?</p>
        <Link to="/register">
          <button type="button">Register!</button>
        </Link>
      </form>
    </>
  );
};

export default LoginForm;
