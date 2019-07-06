import React, { Component } from 'react'
import Logo from '../assets/icons/logo-marvel.svg'
import Facebook from '../assets/icons/facebook.svg'
import Instagram from '../assets/icons/instagram.svg'
import Spotify from '../assets/icons/spotify.svg'
import Youtube from '../assets/icons/youtube.svg'

export default class Footer extends Component {
    render() {
        return(
            <div className="footer-container">
                <img src={Logo} alt="logo" />
                <ul>
                    <h3>A Marvel</h3>
                    <li>Sobre a marvel</li>
                    <li>Ajuda</li>
                    <li>Carreiras</li>
                </ul>

                <ul>
                    <h3>Mídia</h3>
                    <li>Filmes</li>
                    <li>Quadrinhos</li>
                    <li>Programas de TV</li>
                    <li>Jogos</li>
                </ul>

                <div>
                    <h3>Ultima do blog</h3>
                    <div className="noticia"></div>
                </div>

                <ul>
                    <h3>Siga a Marvel</h3>
                    <img src={Facebook} alt="facebook" />
                    <img src={Spotify} alt="spotify" />
                    <img src={Instagram} alt="instagram" />
                    <img src={Youtube} alt="youtube" />
                </ul>
            </div>
        );
    }
}