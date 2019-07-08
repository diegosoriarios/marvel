import React from 'react';
import styled from 'styled-components';
import ItemsCarousel from 'react-items-carousel/';
import './Slider.css'
import axios from 'axios'
import md5 from 'js-md5'

const PUBLIC_KEY = 'dadef783906b16bb2e28933380b8ee11'
const PRIVATE_KEY = '7c8e608afcf4a271d08585b1882ab9f809f8b7c8'

const heroes = [
  "Spider-Man",
  "Black Widow",
  "Hulk",
  "Thor",
  "Black Panther",
  "Thanos",
  "Iron Man"
]

const noOfItems = 12;
const noOfCards = 4;
const autoPlayDelay = 2000;
const chevronWidth = 40;

const Wrapper = styled.div`
  padding: 0 ${chevronWidth}px;
  max-width: 1000px;
  margin: 0 auto;
`;

const SlideItem = styled.div`
  background: #EEE;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`;


export default class Slider extends React.Component {
  state = {
    activeItemIndex: 0,
    heroes: []
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, autoPlayDelay);
    heroes.forEach(hero => {
      this.getHero(hero)
    })
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getHero = async (name) => {
    const timestamp = Number(new Date())
    const hash = md5.create()
    hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)
    var url = `https://gateway.marvel.com:443/v1/public/characters?name=${name}&apikey=dadef783906b16bb2e28933380b8ee11&hash=${hash.hex()}&ts=${timestamp}`
    const request = await axios.get(url)
    this.setState({
        heroes: this.state.heroes.concat(request.data.data.results)
    })
  }

  tick = () => this.setState(prevState => ({
    activeItemIndex: (prevState.activeItemIndex + 1) % (noOfItems-noOfCards + 1),
  }));

  onChange = value => this.setState({ activeItemIndex: value });

  render() {
    const carouselItems = this.state.heroes.map((hero, i) => (
      <SlideItem key={i}>
        <div className="hero-item-slider">
          <img src={`${hero.thumbnail.path}/portrait_xlarge.${hero.thumbnail.extension}`} alt={hero.name} />
          <p className="hero-name">{hero.name}</p>
        </div>
      </SlideItem>
    ));
    return (
      <div className="carousel-container">
        <h3 className="text-uppercase">Personagens em destaque</h3>
        <Wrapper>
          <ItemsCarousel
            gutter={12}
            numberOfCards={noOfCards}
            activeItemIndex={this.state.activeItemIndex}
            requestToChangeActive={this.onChange}
            rightChevron={<button className="slider-arrow-right">{'>'}</button>}
            leftChevron={<button className="slider-arrow-left">{'<'}</button>}
            chevronWidth={chevronWidth}
            outsideChevron
            children={carouselItems}
          />
        </Wrapper>
      </div>
    );
  }
}