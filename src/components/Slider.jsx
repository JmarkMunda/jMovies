import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import MovieSample from "../assets/samplemovie.jpg";

const Slider = () => {
  return (
    <>
      <div className="trailer">
        <img src={MovieSample} alt="TRAILER" />
        <div className="trailer-details">
          <h1>Avengers</h1>
          <div>
            <p>Sci-fi</p>
            <img src={MovieSample} alt="sample-movie-img" />
          </div>
        </div>
        <button className="slider-left-btn">
          <IoIosArrowBack className="btn-icons" />
        </button>
        <button className="slider-right-btn">
          <IoIosArrowForward className="btn-icons" />
        </button>
      </div>
    </>
  );
};

export default Slider;
