import React, { useState } from "react";
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
    <div>
    <h2>Login</h2>
    <form onSubmit={handleLogin}>
      <input
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </form>
  </div>
);
};
  
export default LoginForm;
