import React, { Component } from 'react'
import Logo from '../../assets/icons/logo-marvel.svg'
import './Header.css'

class Header extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-default">
                <a className="navbar-brand" href="/">
                    <img src={Logo} className="d-inline-block align-top" alt="" />
                </a>
                <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="my-2 my-lg-0 navbar-nav mr-auto">
                        <li className="nav-item text-uppercase font-weight-bold">
                            <span className="nav-link" href="#">Filmes</span>
                        </li>
                        <li className="nav-item text-uppercase font-weight-bold">
                            <span className="nav-link" href="#">Quadrinhos</span>
                        </li>
                        <li className="nav-item text-uppercase font-weight-bold">
                            <span className="nav-link" href="#">Programas de TV</span>
                        </li>
                        <li className="nav-item text-uppercase font-weight-bold">
                            <span className="nav-link" href="#">Jogos</span>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header