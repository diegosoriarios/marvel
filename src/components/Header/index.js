import React from 'react'
import Logo from '../../assets/icons/logo-marvel.svg'
import './Header.css'

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg header col-sm-12">
                <div className="text-left">
                    <a className="navbar-brand" href="/">
                        <img src={Logo} width="130" height="62" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div className="text-right float-right navbar-right">
                    <ul className="nav justify-content-end text-right text-light font-weight-bold">
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
    );
}

export default Header