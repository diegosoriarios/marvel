import React, { Component } from 'react'
import Logo from '../../assets/icons/logo-marvel.svg'
import './Header.css'

class Header extends Component {
    render() {
        return(
            <nav class="navbar navbar-expand-lg navbar-default">
                <a class="navbar-brand" href="/">
                    <img src={Logo} class="d-inline-block align-top" alt="" />
                </a>
                <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="my-2 my-lg-0 navbar-nav mr-auto">
                        <li className="nav-item text-uppercase">
                            <span className="nav-link" href="#">Filmes</span>
                        </li>
                        <li className="nav-item text-uppercase">
                            <span className="nav-link" href="#">Quadrinhos</span>
                        </li>
                        <li className="nav-item text-uppercase">
                            <span className="nav-link" href="#">Programas de TV</span>
                        </li>
                        <li className="nav-item text-uppercase">
                            <span className="nav-link" href="#">Jogos</span>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header