import React from 'react';
import background from '../../assets/img/banner.jpg'
import './ImageCard.css';

class ImageCard extends React.Component {
  render() {
    return (
      <div className="image-card">
        <img src={background} className="img-fluid img-card card-image" alt="Background" />
        <div>
          <h2 className="text-uppercase text-image">
            Conheça nossos personagens
          </h2>
        </div>
      </div>
    );
  }
}

export default ImageCard;
