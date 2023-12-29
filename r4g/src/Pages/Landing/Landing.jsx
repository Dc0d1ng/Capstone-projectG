// landing.jsx

import React, { useState } from "react";
import "./landing.scss";
import Logo from "../../assets/r4g.jpeg";
import { Link } from "react-router-dom";

const Landing = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Implement login logic here
      console.log("Logging in with:", username, password);
    } else {
      // Implement signup logic here
      console.log("Signing up with:", username, password);
    }
  };

  const handleLogin = () => {
    console.log("Logging in with: ", username, password);
  };

  const handleSignup = () => {
    console.log("Signing up with: ", username, password);
  };

  return (
    <>
      <section className="landing">
        <Link to="/">
          <img className="landing__logo" src={Logo} alt="Logo" />
        </Link>
        <h1 className="landing__h1">Board Game Selector</h1>

        <form className="landing__form" onSubmit={handleFormSubmit}>
          <input
            id="name"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Username"
          />
          <input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
          <button type="submit" className="landing__button">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <button
          className="landing__button landing__button-toggle"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Switch to Sign Up" : "Switch to Login"}
        </button>
        <div className="landing__divider-top"></div>
        <p className="landing__or">OR</p>
        <div className="landing__divider-bottom"></div>

        <Link className="start-link" to="/choose">
          Let's Begin!
        </Link>
      </section>
    </>
  );
};

export default Landing;
