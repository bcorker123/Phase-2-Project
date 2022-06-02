import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      Navigation
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/foxes">
            Foxes
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/foxes/new">
            Create Fox
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
