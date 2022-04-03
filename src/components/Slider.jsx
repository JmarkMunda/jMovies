import React, { useEffect, useState } from "react";
import { BsTrophy } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import axios from "axios";

const Slider = () => {
  const [trends, setTrends] = useState([]);

  const TRENDING_API = `https://api.themoviedb.org/3//trending/movie/day?api_key=bd52be40d5d29ef7005892ef4125384e`;

  const getTrends = trends.slice(0, 3);

  useEffect(() => {
    fetchTrendsSlider();
  }, []);

  const fetchTrendsSlider = async () => {
    try {
      const data = await axios.get(TRENDING_API);
      setTrends(data.data.results);
    } catch (error) {
      console.log("Slider", error);
    }
  };

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
            <img
              className="slider-pic"
              src={
                getTrends != 0
                  ? `https://image.tmdb.org/t/p/original${getTrends[0].backdrop_path}`
                  : null
              }
              alt="TRAILER"
            />
            <div className="trailer-details">
              <div>
                <h1>{getTrends != 0 && getTrends[0].title}</h1>
              </div>
              <div>
                <BsTrophy />
                <p>{getTrends != 0 && getTrends[0].vote_average}</p>
                <img
                  src={
                    getTrends != 0
                      ? `https://image.tmdb.org/t/p/original${getTrends[0].poster_path}`
                      : null
                  }
                  alt="sample-movie-img"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slider-pic"
              src={
                getTrends != 0
                  ? `https://image.tmdb.org/t/p/original${getTrends[1].backdrop_path}`
                  : null
              }
              alt="TRAILER"
            />
            <div className="trailer-details">
              <h1>{getTrends != 0 && getTrends[1].title}</h1>
              <div>
                <BsTrophy />
                <p>{getTrends != 0 && getTrends[1].vote_average}</p>
                <img
                  src={
                    getTrends != 0
                      ? `https://image.tmdb.org/t/p/original${getTrends[1].poster_path}`
                      : null
                  }
                  alt="sample-movie-img"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slider-pic"
              src={
                getTrends != 0
                  ? `https://image.tmdb.org/t/p/original${getTrends[2].backdrop_path}`
                  : null
              }
              alt="TRAILER"
            />
            <div className="trailer-details">
              <h1>{getTrends != 0 && getTrends[2].title}</h1>
              <div>
                <BsTrophy />
                <p>{getTrends != 0 && getTrends[2].vote_average}</p>
                <img
                  src={
                    getTrends != 0
                      ? `https://image.tmdb.org/t/p/original${getTrends[2].poster_path}`
                      : null
                  }
                  alt="sample-movie-img"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </>
  );
};

export default Slider;
