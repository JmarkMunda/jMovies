import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <h1>jMovies</h1>
        </div>
        <ul>
          <li>
            <a href="/popular">Popular</a>
          </li>
          <li>
            <a href="/movies">Movies</a>
          </li>
          <li>
            <a href="/mymovies">My Movies</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
