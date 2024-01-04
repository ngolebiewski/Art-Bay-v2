import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/auth/register", {
        email,
        firstName,
        lastName,
        username,
        password,
      });

      const token = response.data.token;
      localStorage.setItem("TOKEN", token);
      navigate("/welcome");
    } catch (error) {
      console.error("Error - Could Not Register New User", error);
    }
  };

  return (
    <>
      <h2>Create account</h2>
      <br />
      <form onSubmit={handleRegistrationSubmit}>
        <label>
          Email
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          First Name
          <br />
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Last Name
          <br />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Username <br />
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
        <br />
        <button type="submit">Continue</button>
      </form>
    </>
  );
};

export default Register;
