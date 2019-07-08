import React, { Component } from 'react'
import Facebook from '../../assets/icons/facebook.svg'
import Instagram from '../../assets/icons/instagram.svg'
import Spotify from '../../assets/icons/spotify.svg'
import Youtube from '../../assets/icons/youtube.svg'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return(
            <div className="footer-container">
                <svg viewBox="0 0 36 52" xmlns="http://www.w3.org/2000/svg">
                    <rect fill="#EC1D24" width="100%" height="100%"></rect>
                    <path fill="#FEFEFE" d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"></path>
                </svg>
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

                <ul className="social-network">
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