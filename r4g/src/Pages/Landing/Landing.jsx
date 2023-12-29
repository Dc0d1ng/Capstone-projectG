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
        <ul>
          <Link to="/signup">
            <li>
              <button className="landing__button">Sign Up</button>
            </li>
          </Link>
          <Link to="/user">
            <li>
              <button className="landing__button">Login</button>
            </li>
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
