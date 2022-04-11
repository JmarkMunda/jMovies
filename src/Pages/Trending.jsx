import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Movies from "../components/Movies";
import Footer from "../components/Footer";

const Trending = ({ animations }) => {
  const [trending, setTrending] = useState([]);
  const TRENDING_API = `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    fetchTrending();
    return () => {
      setTrending([]);
    };
  }, []);

  const fetchTrending = async () => {
    try {
      let response = await axios.get(TRENDING_API);
      setTrending(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      variants={animations}
      initial={animations.initial}
      animate={animations.animate}
      exit={animations.exit}
      transition={animations.pageTransition}>
      <div className="container">
        <h1>Trending</h1>
        <div className="movies-grid">
          {trending !== 0
            ? trending.map((movie) => <Movies key={movie.id} movie={movie} />)
            : ""}
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Trending;
