import React from 'react';
import './styles/sass/index.scss'
import {AnimatePresence} from 'framer-motion'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MovieProvider } from './components/context/MovieContext';

import Navbar from "./components/Navbar";
import Home from './components/context/Home/Home';
import Latest from "./components/Latest";
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
    <MovieProvider>
      <div className="app">
        <BrowserRouter>
          <Navbar />
          <AnimatePresence>
            <Routes>
              <Route index path="/" element={<Home animations={animations} />} />
              <Route path="latest" element={<Latest animations={animations} />} />
              <Route path="upcoming" element={<Upcoming animations={animations} />} />
              <Route path="toprated" element={<TopRated animations={animations} />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </div>
    </MovieProvider>
  
  );
}

export default App;
