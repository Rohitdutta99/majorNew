import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {auth} from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("account created!");
      // Redirect to /home route after successful login
      navigate('/home');
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div class="form-group">
          <label htmlFor="email">Email: 
          <input type="email" class="form-control" name="username" onChange={(e) => setEmail(e.target.value)}/>
          </label>
        </div>
        <div class="form-group">
          <label htmlFor="password">Password: 
          <input type="password" class="form-control" name="password" onChange={(e) => setPassword(e.target.value)}/>
          </label>
        </div>
        <button type="submit" class="btn btn-dark">Sign Up</button>
        <p>already registered <Link to="./login">Login</Link></p>
      </form>
    </div>
  );
}

export default SignUp;