import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import MovieSample from "../assets/samplemovie.jpg";

const Slider = () => {
  return (
    <>
      <button className="slider-left-btn">
        <IoIosArrowBack className="btn-icons" />
      </button>
      <button className="slider-right-btn">
        <IoIosArrowForward className="btn-icons" />
      </button>
      <div>
        <div className="movie-pic-container">
          <img src={MovieSample} alt="sample-movie-img" />
        </div>
        <div className="movie-desc-container">
          <div className="trailer">
            <h1>Avengers</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
