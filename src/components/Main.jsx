import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App'
import '../App.css'

function Main() {
    return (
        <main>
            {/* Vamos deixar um espaço para a imagem aqui */}
            <div className="illustration">
                <img className="imagem_grande" src="https://myshoman.com/assets/img/shoman-global.svg" alt="Ilustração Viajante" />
            </div>

            <div className="content">
                <h2>O seu próximo <span>destino</span> pode estar aqui...</h2>

                <p className="subtitle">
                    Aqui você encontra uma seleção de <strong>pacotes completos</strong> para as suas férias!
                </p>

                <p className="description">
                    No ConnectFlight você encontra pacotes de viagens nacionais e internacionais
                    que incluem passagens aéreas, hotéis, café da manhã, e até seguro viagem com
                    <strong> preços arrasadores</strong>!
                </p>

                <p className="cta-text">
                    Se você ainda não tem um destino definido, confira nossa seção de ofertas.
                </p>
            </div>
        </main>
    );
}

export default Main;