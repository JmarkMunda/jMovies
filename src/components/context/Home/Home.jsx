import React from "react";
import Header from "../../Header";
import MovieList from "../../MovieList";
import Footer from "../../Footer";

import { motion } from "framer-motion";

const Home = ({ animations }) => {
  return (
    <motion.div
      variants={animations}
      initial={animations.initial}
      animate={animations.animate}
      exit={animations.exit}
      transition={animations.pageTransition}>
      <div>
        <Header />
        <MovieList />
        <Footer />
      </div>
    </motion.div>
  );
};

export default Home;
