import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Movies from "./Movies";

const TopRated = ({ animations }) => {
  const [topRated, setTopRated] = useState([]);

  const TOPRATED_API =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=bd52be40d5d29ef7005892ef4125384e";

  useEffect(async () => {
    try {
      let response = await axios.get(TOPRATED_API);
      setTopRated(response.data.results);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <motion.div
      variants={animations}
      initial={animations.initial}
      animate={animations.animate}
      exit={animations.exit}
      transition={animations.pageTransition}>
      <div className="container">
        <h1>Top Rated</h1>
        <div className="movies-grid">
          {topRated !== 0
            ? topRated.map((movie) => <Movies key={movie.id} movie={movie} />)
            : ""}
        </div>
      </div>
    </motion.div>
  );
};

export default TopRated;
