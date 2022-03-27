import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <h1>jMovies</h1>
          </Link>
        </div>
        {/* <div className="mobile-menu"></div> */}
        <ul>
          <li>
            <NavLink
              to="trending"
              className={({ isActive }) => (isActive ? "activeNav" : "")}>
              Trending
            </NavLink>
          </li>
          <li>
            <NavLink
              to="upcoming"
              className={({ isActive }) => (isActive ? "activeNav" : "")}>
              Upcoming
            </NavLink>
          </li>
          <li>
            <NavLink
              to="toprated"
              className={({ isActive }) => (isActive ? "activeNav" : "")}>
              Top Rated
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
