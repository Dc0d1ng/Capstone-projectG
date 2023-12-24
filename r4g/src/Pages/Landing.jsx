import React from "react";
import { Link } from "react-router-dom";

const landing = () => {
  return (
    <>
      <Link to="/choose">
        <button>Let's get Started!</button>
      </Link>
    </>
  );
};

export default landing;
