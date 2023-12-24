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
        <h1 className="header__h1">Board Game Selector</h1>
        <ul>
          <Link to="/signup">
            <li>Sign Up</li>
          </Link>
          <Link to="/user">
            <li>Login</li>
          </Link>
        </ul>
      </section>
    </>
  );
};

export default Header;
