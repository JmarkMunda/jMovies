import React from "react";
import { BsPlayCircle } from "react-icons/bs";

const Movies = ({ feature }) => {
  console.log(feature.poster_path);

  return (
    <div className="movie">
      <img
        className="feature-poster"
        src={`https://image.tmdb.org/t/p/original${feature.poster_path}`}
      />
      <div className="movie-hover">
        <BsPlayCircle className="play-icon" />
        <div>
          <h3>{feature.title}</h3>
          <p>Release date: {feature.release_date}</p>
        </div>
      </div>
    </div>
  );
};

export default Movies;
