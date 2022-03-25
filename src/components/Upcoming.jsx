import React from "react";
import { motion } from "framer-motion";

const Upcoming = ({ animations }) => {
  return (
    <motion.div
      variants={animations}
      initial={animations.initial}
      animate={animations.animate}
      exit={animations.exit}
      transition={animations.pageTransition}>
      <div className="container">
        <h1>Upcoming</h1>
      </div>
    </motion.div>
  );
};

export default Upcoming;
