import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = ({ name }) => {
  return (
    <div className="banner-container">
      <div className="banner">
        <p className="slashAndHome">
          <Link to="/">Home</Link>
        </p>
        <p className="slashAndLink">/ {name}</p>
      </div>
    </div>
  );
};

export default Banner;
