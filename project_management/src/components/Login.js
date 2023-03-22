import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


import "./auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async event => {
    //handle login 
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleLogin}>
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <button type="submit">Log in</button>
        <p>
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;