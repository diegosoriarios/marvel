import React from 'react'
import Cards from '../assets/img/cards-fan-desktop.png'

const CardDiv = () => {
    return (
        <div className="card-div">
            <h2 className="text-uppercase">Marvel mastercard</h2>
            <h5>Desbloqueie seus super poderes</h5>
            <img src={Cards} alt="cards" />
            <button className="text-uppercase">Cadastre-se Agora</button>
            <button className="text-uppercase btn-light text-danger">Entenda como funciona</button>
        </div>
    );
}

export default CardDiv