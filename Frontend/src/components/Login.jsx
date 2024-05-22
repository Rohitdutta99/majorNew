import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login Successful!");
      // Redirect to /home route after successful login
      navigate('/home');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <div className="form-group">
          <label htmlFor="email">
            Email:
            <input
              type="email"
              className="form-control"
              name="username"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password:
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-dark">Log In</button>
        <p>Don't have an account? <Link to="/">Sign Up</Link></p>
      </form>
    </div>
  );
}

export default Login;
