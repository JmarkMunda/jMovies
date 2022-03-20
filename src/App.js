import React from 'react';
import './styles/sass/index.scss'
import Navbar from './components/Navbar';
import Header from './components/Header';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <section>
        <Header />
        <MainContainer />
      </section>
     
    </div>
  );
}

export default App;
