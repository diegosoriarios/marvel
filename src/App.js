import React from 'react';
import Header from './components/Header'
import background from './assets/img/banner.jpg'
import './App.css';
import HeroesList from './components/HeroesList';
import CardDiv from './components/CardDiv'
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import Slider from './components/Slider';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <img src={background} className="image-fluid w-100 bg-image" alt="Background" />
        <div>
          <p className="text-image text-uppercase">
            Conheça nossos personagens
          </p>
        </div>
        <Slider />
        <HeroesList page={1} />
        <CardDiv />
        <Newsletter />
        <Footer />
      </div>
    );
  }
}

export default App;
