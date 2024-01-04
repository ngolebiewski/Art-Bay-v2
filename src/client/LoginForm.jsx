import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import axios from 'axios';

const LoginForm = ({setToken}) => {
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
    console.log(token)
    navigate("/");
  } catch (error) {
      if (error.response) {
        console.error("Server Error:", error.response.data);
      } else if (error.request) {
        // if a request was made but no response was received
        console.error("Network Error:", error.request);
      } else {
        console.error("Error:", error.message);
      }
  }
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
  
export default LoginForm;
