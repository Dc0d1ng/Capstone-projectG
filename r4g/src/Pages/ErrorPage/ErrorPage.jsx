import React from "react";
import "./ErrorPage.scss";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="error">
      <h2 className="error__header">Oh meow, something went wrong!</h2>
      <Link to="/">
        <button className="error__button">BACK TO HOME</button>
      </Link>
    </section>
  );
};

export default ErrorPage;
