import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import Movies from "./Movies";

const MovieList = () => {
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState([]);

  // API's
  const POPULAR_API = `https://api.themoviedb.org/3/discover/movie/?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`;
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query='${searchInput}'`;

  // Initial list of movies
  useEffect(() => {
    fetchPopular();
    return () => {
      setSearch([]);
    };
  }, []);

  const fetchPopular = async () => {
    await axios
      .get(POPULAR_API)
      .then((response) => setSearch(response.data.results))
      .catch((error) => console.log("Popular", error));
  };

  // Search for movies
  const searchMovie = async (e) => {
    if (e.key == "Enter") {
      axios
        .get(SEARCH_API)
        .then((response) => setSearch(response.data.results))
        .catch((err) => console.log("Error occured:" + err.message));
    }
  };

  return (
    <div className="main-container">
      <h1>Search your favorite movies</h1>
      <Search
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        searchMovie={searchMovie}
      />
      <div className="movies-grid">
        {/* Render movies */}
        {search !== 0
          ? search.map((movie) => <Movies key={movie.id} movie={movie} />)
          : ""}
        {search == 0 && <h1>No results</h1>}
      </div>
    </div>
  );
};

export default MovieList;
