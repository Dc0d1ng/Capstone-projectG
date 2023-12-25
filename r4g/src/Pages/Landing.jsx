import React from "react";
import "./landing.scss";
import Logo from "../assets/r4g.png";
import { Link } from "react-router-dom";

const landing = () => {
  return (
    <>
      <section className="header">
        <Link to="/">
          <img src={Logo} />
        </Link>
        <h1 className="header__h1">Board Game Selector</h1>
        <ul>
          <Link to="/signup">
            <li>Sign Up</li>
          </Link>
          <Link to="/user">
            <li>Login</li>
          </Link>
        </ul>
        <Link className="start-link" to="/choose">
          Let's Get Started!
        </Link>
      </section>
    </>
  );
};

export default landing;
