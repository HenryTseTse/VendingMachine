import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/soda">Soda </Link>
      <Link to="/chips">Chips </Link>
      <Link to="/sardines">Fresh Sardines </Link>
    </nav>
  );
};

export default NavBar;
