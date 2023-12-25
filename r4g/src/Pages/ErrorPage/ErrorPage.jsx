import React from "react";
import "./ErrorPage.scss";
import Ohnoes from "../../assets/12.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="error">
      <img className="error__meowsage" src={Ohnoes} />
      <h2 className="error__header">Oh meow something went wrong!</h2>
      <Link to="/">
        <button className="error__button">BACK TO HOME</button>
      </Link>
    </section>
  );
};

export default ErrorPage;
