import React from 'react';

import Header from './components/Header'
import ImageCard from './components/ImageCard'
import Carousel from './components/Carousel';
import HeroesList from './components/HeroesList';
import CardDiv from './components/CardDiv';
import Newsletter from './components/Newsletter'
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ImageCard />
      <Carousel />
      <HeroesList />
      <CardDiv />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
