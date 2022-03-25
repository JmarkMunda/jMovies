import { motion } from "framer-motion";
import React from "react";

const TopRated = ({ animations }) => {
  return (
    <motion.div
      variants={animations}
      initial={animations.initial}
      animate={animations.animate}
      exit={animations.exit}
      transition={animations.pageTransition}>
      <div className="container">
        <h1>Top Rated</h1>
      </div>
    </motion.div>
  );
};

export default TopRated;
