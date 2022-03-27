import React from 'react';
import './styles/sass/index.scss'
import {AnimatePresence} from 'framer-motion'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from './components/context/Home/Home';
import Trending from './components/Trending';
import Upcoming from "./components/Upcoming";
import TopRated from "./components/TopRated";


const pageTransition = {
  duration: 1.5
}

const animations = {
  initial: { opacity: 0},
  animate: { opacity: 1 },
  exit: { opacity: 0},
  pageTransition
};

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <AnimatePresence>
          <Routes>
            <Route index path="/" element={<Home animations={animations} />} />
            <Route path="trending" element={<Trending animations={animations} />} />
            <Route path="upcoming" element={<Upcoming animations={animations} />} />
            <Route path="toprated" element={<TopRated animations={animations} />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
