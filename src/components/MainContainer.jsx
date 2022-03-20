import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import axios from "axios";

const MainContainer = () => {
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState([]);

  const searchMovieUrl = `https://imdb-api.com/en/API/SearchMovie/k_abz0x3ul/${searchInput}`;

  const searchMovie = async (e) => {
    if (e.key === "Enter") {
      const movie = await axios
        .get(searchMovieUrl)
        .then((response) => setData(response.data))
        .catch((err) => console.log("Error occured:" + err.message));
      console.log(data);
      return movie;
    }
  };

  return (
    <div className="main-container">
      <h1>Watch Free Movies Now</h1>
      <div className="search-container">
        <BsSearch className="search-icon" />
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={searchMovie}
        />
        <TiDelete
          className={searchInput.length > 0 ? "search-delete-btn" : "inactive"}
          onClick={() => setSearchInput("")}
        />
      </div>

      <div className="main-movies-container"></div>
    </div>
  );
};

export default MainContainer;
