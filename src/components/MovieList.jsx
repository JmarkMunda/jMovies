import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import Movies from "./Movies";

const MovieList = () => {
  const [searchInput, setSearchInput] = useState("");
  const [populars, setPopulars] = useState([]);

  const API_KEY = "bd52be40d5d29ef7005892ef4125384e";

  const POPULAR_API = `https://api.themoviedb.org/3/discover/movie/?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;

  // const searchMovieUrl = `https://imdb-api.com/en/API/SearchMovie/k_abz0x3ul/${searchInput}`;

  // const searchMovie = async (e) => {
  //   if (e.key === "Enter") {
  //     const movie = await axios
  //       .get(FEATURED_API)
  //       .then((response) => setData(response.data))
  //       .catch((err) => console.log("Error occured:" + err.message));
  //     console.log(data);
  //     return movie;
  //   }
  // };

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    await axios
      .get(POPULAR_API)
      .then((response) => setPopulars(response.data.results))
      .catch((err) => console.log(err));
  };

  return (
    <div className="main-container">
      <h1>All time favorite movies</h1>
      <Search
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        // searchMovie={searchMovie}
      />
      <div className="movies-container">
        <h3>Popular Movies</h3>
        <div className="movies-grid">
          {populars.map((popular) => (
            <Movies key={popular.id} popular={popular} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
