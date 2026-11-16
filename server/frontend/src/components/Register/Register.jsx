import React, { useState } from 'react';
import "./Register.css";
import Header from '../Header/Header';

const Register = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Registration form submitted successfully.");
  };

  return (
    <div>
      <Header />

      <div className="register_container">
        <h1 className="header">Sign Up</h1>

        <form className="inputs" onSubmit={handleSubmit}>

          <div className="input">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              className="input_field"
              placeholder="Enter Username"
              required
            />
          </div>

          <div className="input">
            <label htmlFor="firstname">First Name</label>
            <input
              id="firstname"
              name="firstName"
              type="text"
              className="input_field"
              placeholder="Enter First Name"
              required
            />
          </div>

          <div className="input">
            <label htmlFor="lastname">Last Name</label>
            <input
              id="lastname"
              name="lastName"
              type="text"
              className="input_field"
              placeholder="Enter Last Name"
              required
            />
          </div>

          <div className="input">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="input_field"
              placeholder="Enter Email"
              required
            />
          </div>

          <div className="input">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="input_field"
              placeholder="Enter Password"
              required
            />
          </div>

          <div className="submit_panel">
            <button className="submit" type="submit">
              Register
            </button>
            <p role="status">{message}</p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Register;
