import React from "react";
import "./Header.scss";
import Logo from "../assets/r4g.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section className="header">
        <Link to="/">
          <img src={Logo} />
        </Link>
        <h1 className="header__h1">ROLL 4 GAMES</h1>
        <p className="header__subtitle">Board Game Selector</p>
        <ul>
          <Link to="/signup">
            <li>Sign Up</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
        </ul>
      </section>
    </>
  );
};

export default Header;
