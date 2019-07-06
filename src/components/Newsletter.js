import React, { Component } from 'react'

export default class Newsletter extends Component {
    state = {
        email: ''
    }

    render() {
        return(
            <div className="fotter-container">
                <div>
                    RECEBA AS NOVIDADES DA MARVEL
                </div>
                <form>
                    <h4>Cadastre-se para receber nossas noticias em primeira mão!</h4>
                    <label>seu melhor e-mail</label>
                    <input type="email" value={this.state.email} name="email" placeholder="Informe seu melhor e-mail" />
                    <button type="submit" className="btn-danger">Enviar</button>
                </form>
            </div>
        );
    }
}