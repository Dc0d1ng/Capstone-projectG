import React from "react";
import "./landing.scss";
import Logo from "../../assets/r4g.jpeg";
import { Link } from "react-router-dom";

const landing = () => {
  return (
    <>
      <section className="landing">
        <Link to="/">
          <img className="landing__logo" src={Logo} />
        </Link>
        <h1 className="landing__h1">Board Game Selector</h1>
        <form className="landing__form">
          <input id="name" type="text" placeholder="Username"></input>
          <input id="password" type="password" placeholder="Password"></input>
          <Link to="/user">
            <button className="landing__button landing__button-login">
              Login
            </button>
          </Link>
          {/* <Link to="/signup"> */}
          <button className="landing__button">Sign Up</button>
          {/* </Link> */}
        </form>
        {/* <p className="landing__p-break">
          -------------------O R---------------------
        </p> */}
        <Link className="start-link" to="/choose">
          Let's Begin!
        </Link>
      </section>
    </>
  );
};

export default landing;
