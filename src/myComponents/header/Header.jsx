import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            className="header__icon"
            style={{ width: "100px", margin: "10px 20px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
          />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span> Popular</span>
          Popular
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span> Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span> Upcoming</span>
        </Link>
        <Link to="/video" style={{ textDecoration: "none" }}>
          <span> Video</span>
        </Link>
        <Link to="/form" style={{ textDecoration: "none" }}>
          <span> Form</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
