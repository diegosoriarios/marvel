import React from 'react';
import Header from './components/Header'
import background from './assets/background.jpg'
import axios from 'axios'
import md5 from 'js-md5'
import './App.css';

const PUBLIC_KEY = 'dadef783906b16bb2e28933380b8ee11'
const PRIVATE_KEY = '7c8e608afcf4a271d08585b1882ab9f809f8b7c8'

class App extends React.Component {

  fetchApi = async () => {
    const timestamp = Number(new Date())
    const hash = md5.create()
    hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)
    //var url = 'https://gateway.marvel.com:443/v1/public/characters?series=2063&orderBy=name&limit=100&apikey=dadef783906b16bb2e28933380b8ee11'
    var url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=1000&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
    console.log(url)
    axios.get(url)
      .then(response => {
        console.log(response.data.data.results)
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <img src={background} class="image-fluid w-100 bg-image" alt="Responsive image" />
        <div>
          <p className="text-image text-uppercase">
            Conheça nossos personagens
          </p>
        </div>
        {this.fetchApi()}
      </div>
    );
  }
}

export default App;
