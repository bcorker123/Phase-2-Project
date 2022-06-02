import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div id="nav-bar">
      <div id="nav-title">Navigation</div>
      <ul>
        <li className="nav">
          <NavLink
            className="nav"
            exact
            to="/"
            style={{ textDecoration: "none" }}
          >
            Home 🦊
          </NavLink>
        </li>
        <li className="nav">
          <NavLink
            className="nav"
            exact
            to="/foxes"
            style={{ textDecoration: "none" }}
          >
            Foxes 🦊🦊🦊
          </NavLink>
        </li>
        <li className="nav">
          <NavLink
            className="nav"
            exact
            to="/foxes/new"
            style={{ textDecoration: "none" }}
          >
            Create Fox ➕🦊
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
