import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ImMenu } from "react-icons/im";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <h1>jMovies</h1>
        </Link>
      </div>
      <ImMenu
        className="mobile-menu"
        onClick={() => setToggleMenu(!toggleMenu)}
      />
      <div className={toggleMenu ? "nav-container" : "inactive-menu"}>
        <ul>
          <li>
            <NavLink
              to="trending"
              className={({ isActive }) => (isActive ? "activeNav" : "")}
              onClick={() => setToggleMenu(false)}>
              Trending
            </NavLink>
          </li>
          <li>
            <NavLink
              to="upcoming"
              className={({ isActive }) => (isActive ? "activeNav" : "")}
              onClick={() => setToggleMenu(false)}>
              Upcoming
            </NavLink>
          </li>
          <li>
            <NavLink
              to="toprated"
              className={({ isActive }) => (isActive ? "activeNav" : "")}
              onClick={() => setToggleMenu(false)}>
              Top Rated
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
