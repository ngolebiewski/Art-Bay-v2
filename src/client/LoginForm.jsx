import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import { Axios } from "axios";

const LoginForm = ({setToken}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

const handleLogin = () => {
  try {
    const { data: token } = await axios.post("/auth/login", {
      username,
      password,
    });
    localStorage.setItem("TOKEN", token.token);
    setToken(token.token);
    navigate("/");
  } catch (error) {
    console.error(error);
  }
}

};

  return (
    <>
      <h2>Login or Register!</h2>
      <form onSubmit={handleSubmit}>
        <label>
            Username:
                <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}                            // takes what the user typed in and puts it in the state
                required                                                                 // must provide username to submit - same for password below
        />
        </label>
        <br />
        <label>
            password:
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
        />
        </label>
        <br />
        <button type = "submit"> Login!</button>
        {/* <Link to="/registration">                                                   // add registration feature / route later 
            <button type="button">Sign up!</button>                                     // also need to import Link from react router
        </Link> */}
      </form>
    </>
  );
};

export default LoginForm;
