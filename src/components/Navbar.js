import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="ul">
          <li className="li">
            <Link to="/">
              <img src="logoSite.png" alt="logoSite.png" className="logo" />
            </Link>
          </li>

          <li className="li">
            <Link to="/login" className="lienLogin">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;