import React from 'react';
import './styles/sass/index.scss'
import Navbar from './components/Navbar';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="app">
      <Navbar />
      <section>
        <Header />
        <MovieList />
      </section>
     
    </div>
  );
}

export default App;
