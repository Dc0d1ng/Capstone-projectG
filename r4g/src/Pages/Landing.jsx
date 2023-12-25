import React from "react";
import "./landing.scss";
import { Link } from "react-router-dom";

const landing = () => {
  return (
    <>
      <Link className="start-link" to="/choose">
        Let's Get Started!
      </Link>
    </>
  );
};

export default landing;
