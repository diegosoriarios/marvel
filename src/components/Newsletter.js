import React, { Component } from 'react'

export default class Newsletter extends Component {
    state = {
        email: ''
    }

    render() {
        return(
            <div className="newsletter">
                <div className="news-div">
                    RECEBA AS NOVIDADES DA MARVEL
                </div>
                <form className="news-form">
                    <h4>Cadastre-se para receber nossas noticias em primeira mão<span className="excl">!</span></h4>
                    <label>seu melhor e-mail</label><br />
                    <input className="input-email" type="email" value={this.state.email} name="email" placeholder="Informe seu melhor e-mail" />
                    <button type="submit" className="btn-enviar">Enviar</button>
                </form>
            </div>
        );
    }
}