import React from 'react';
import './styles/sass/index.scss'
import {AnimatePresence} from 'framer-motion'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from './components/Home/Home';
import Upcoming from './Pages/Upcoming';
import Trending from './Pages/Trending';
import TopRated from './Pages/TopRated';
import NotFound from './components/NotFound';


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
            <Route path='*' element={<NotFound animations={animations}/>} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
