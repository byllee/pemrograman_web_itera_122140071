import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>RuangSunyi</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/jadwal">Jadwal</Link></li>
        <li><Link to="/catatan">Catatan</Link></li>
        <li><Link to="/target">Target</Link></li> 
      </ul>
    </nav>
  );
};

export default Navbar;
