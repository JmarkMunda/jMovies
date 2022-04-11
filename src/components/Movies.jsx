import React, { useState } from "react";
import { BsPlayCircle } from "react-icons/bs";
import Modal from "./Modal/Modal";

const Movies = ({ movie }) => {
  // Modal
  const [isOpen, setIsOpen] = useState(false);

  const clickedMovie = () => {
    setIsOpen(true);
  };

  return (
    <div className="movie">
      <img
        className="movie-poster"
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt="No images available"
      />
      <div className="movie-hover">
        <BsPlayCircle className="play-icon" onClick={clickedMovie} />
        <div>
          <h3>{movie.title}</h3>
          <p>Release date: {movie.release_date}</p>
        </div>
      </div>
      {/* Modal */}
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} movie={movie} />
    </div>
  );
};

export default Movies;
