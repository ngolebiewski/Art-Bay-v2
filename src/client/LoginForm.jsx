import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="d-flex justify-content-center align-items-start vh-100">
      <div className="w-100" style={{ maxWidth: '330px', marginTop: '0px' }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
          <p className="text-center mt-3">New to ArtBay?</p>
          <div className="d-grid gap-2">
            <Link to="/register" class="btn btn-info">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
