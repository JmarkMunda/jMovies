import React from "react";
import MovieSample from "../assets/samplemovie.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
  return (
    <>
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}>
          <SwiperSlide>
            <img className="slider-pic" src={MovieSample} alt="TRAILER" />
            <div className="trailer-details">
              <h1>Avengers</h1>
              <div>
                <p>Sci-fi</p>
                <img src={MovieSample} alt="sample-movie-img" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="slider-pic" src={MovieSample} alt="TRAILER" />
            <div className="trailer-details">
              <h1>Page 2</h1>
              <div>
                <p>Sci-fi</p>
                <img src={MovieSample} alt="sample-movie-img" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="slider-pic" src={MovieSample} alt="TRAILER" />
            <div className="trailer-details">
              <h1>Page 3</h1>
              <div>
                <p>Sci-fi</p>
                <img src={MovieSample} alt="sample-movie-img" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </>
  );
};

export default Slider;
