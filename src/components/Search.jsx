import React from "react";
import { BsSearch } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";

const Search = ({ searchInput, setSearchInput, searchMovie }) => {
  return (
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
  );
};

export default Search;
