import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Wishlist
          </NavLink>
        </li>
        <li>
          <NavLink to="/bookmarked" activeClassName="active">
            Bookmarked
          </NavLink>
        </li>
        <li>
          <NavLink to="/completed" activeClassName="active">
            Completed
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-wish" activeClassName="active">
            Add Wish
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
