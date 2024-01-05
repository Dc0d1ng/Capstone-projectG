import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./landing.scss";
import Logo from "../../assets/r4g.jpeg";

const Landing = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setisLogin] = useState(false);

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      if (isLogin) {
        // login logic here
        try {
          const response = await axios.post("/user/login", {
            username,
            password,
          });
          console.log(`${username}, you're logged in!`, response.data);
          localStorage.setItem("token", response.data.token);
          navigate.push("/choose");
        } catch (error) {
          console.log("Login failed...", error.response.data.message);
        }
      } else {
        //signup logic here
        try {
          const response = await axios.post("/user/signup", {
            username,
            password,
          });
          console.log("You're signed up!", response.data);
        } catch (error) {
          console.error("Signup failed...", error.response.data.message);
        }
      }
    } catch (error) {
      console.error(
        "Authentication error",
        error.response?.data?.message || "There is an error"
      );
      setError(error.response?.data?.message || "An error occured");
    } finally {
      setLoading(false);
    }
  };

  const toggleLoginMode = () => {
    setisLogin(!isLogin);
  };

  return (
    <>
      <section className="landing">
        <Link to="/">
          <img className="landing__logo" src={Logo} alt="Logo" />
        </Link>
        <h1 className="landing__h1">Board Game Selector</h1>

        <form className="landing__form" onSubmit={handleFormSubmit}>
          <label className="landing__label-username">Username:</label>
          <input
            id="name"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter Username"
            minLength={6}
            required
          />
          <label className="landing__label-password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter Password"
            minLength={6}
            required
          />
          <button type="submit" className="landing__button">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <button
          className="landing__button landing__button-toggle"
          onClick={() => setisLogin(!isLogin)}
        >
          {isLogin ? "Switch to Sign Up" : "Switch to Login"}
        </button>
        <div className="landing__divider-top"></div>
        <p className="landing__or">OR</p>
        <div className="landing__divider-bottom"></div>

        <Link className="start-link" to="/choose">
          LET'S BEGIN!
        </Link>
      </section>
    </>
  );
};

export default Landing;
