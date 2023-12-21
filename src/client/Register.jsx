import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();

    console.log("Registration Email Provided:", email);
    console.log("Registration First Name Provided:", firstName);
    console.log("Registration Last Name Provided:", lastName);
    console.log("Registration Username Provided:", username);
    console.log("Registration Password Provided:", password);
  };

  return (
    <>
      <h2>Register here!</h2>
      <br />
      <form onSubmit={handleRegistrationSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />

        <button type="submit">Register!</button>
      </form>
    </>
  );
};

export default Register;
