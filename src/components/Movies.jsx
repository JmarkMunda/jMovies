import React from "react";
import { BsPlayCircle } from "react-icons/bs";

const Movies = ({ popular }) => {
  return (
    <div className="movie">
      <img
        className="movie-poster"
        src={`https://image.tmdb.org/t/p/original${popular.poster_path}`}
      />
      <div className="movie-hover">
        <BsPlayCircle className="play-icon" />
        <div>
          <h3>{popular.title}</h3>
          <p>Release date: {popular.release_date}</p>
        </div>
      </div>
    </div>
  );
};

export default Movies;
