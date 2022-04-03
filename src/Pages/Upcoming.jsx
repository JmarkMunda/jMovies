import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Movies from "../components/Movies";

const Upcoming = ({ animations }) => {
  const [upcoming, setUpcoming] = useState([]);

  // API's
  const API_KEY = "bd52be40d5d29ef7005892ef4125384e";
  const UPCOMING_API = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;

  useEffect(async () => {
    try {
      let response = await axios.get(UPCOMING_API);
      setUpcoming(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(upcoming);

  return (
    <motion.div
      variants={animations}
      initial={animations.initial}
      animate={animations.animate}
      exit={animations.exit}
      transition={animations.pageTransition}>
      <div className="container">
        <h1>Upcoming</h1>
        <div className="movies-grid">
          {/* Movie List */}
          {upcoming !== 0
            ? upcoming.map((movie) => <Movies key={movie.id} movie={movie} />)
            : ""}
        </div>
      </div>
    </motion.div>
  );
};

export default Upcoming;
