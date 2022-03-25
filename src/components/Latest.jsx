import React, { useContext } from "react";
import { motion } from "framer-motion";
import { MovieContext } from "./context/MovieContext";

const Latest = ({ animations }) => {
  const { popularMovies } = useContext(MovieContext);
  return (
    <motion.div
      variants={animations}
      initial={animations.initial}
      animate={animations.animate}
      exit={animations.exit}
      transition={animations.pageTransition}>
      <div className="container">
        <h1>{popularMovies[0].title}</h1>
      </div>
    </motion.div>
  );
};

export default Latest;
