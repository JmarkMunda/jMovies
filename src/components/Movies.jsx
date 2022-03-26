import React from "react";
import { BsPlayCircle } from "react-icons/bs";

const Movies = ({ movie }) => {
  return (
    <div className="movie">
      <img
        className="movie-poster"
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt="No images available"
      />
      <div className="movie-hover">
        <BsPlayCircle className="play-icon" />
        <div>
          <h3>{movie.title}</h3>
          <p>Release date: {movie.release_date}</p>
        </div>
      </div>
    </div>
  );
};

export default Movies;
