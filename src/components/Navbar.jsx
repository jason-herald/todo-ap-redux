import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Todo App</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">All Tasks</Link>
        </li>
        <li>
          <Link to="/due-today">Today</Link>
        </li>
        <li>
          <Link to="/pending">Pending Tasks</Link>
        </li>
        <li>
          <Link to="/completed">Completed Tasks</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
