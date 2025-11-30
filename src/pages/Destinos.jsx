import React from 'react';

function Destinos() {
    // Lista de lugares (simulando uma API ou banco de dados)
    const lugares = [
        { id: 1, nome: "Jalapão - TO", desc: "As dunas e fervedouros mais lindos do Brasil.", img: "https://placehold.co/300x200/orange/white?text=Jalapao" },
        { id: 2, nome: "Rio de Janeiro - RJ", desc: "Cristo Redentor e praias inesquecíveis.", img: "https://placehold.co/300x200/blue/white?text=Rio+RJ" },
        { id: 3, nome: "Gramado - RS", desc: "O charme da serra e o melhor chocolate.", img: "https://placehold.co/300x200/red/white?text=Gramado" },
        { id: 4, nome: "Salvador - BA", desc: "História, cultura e muito axé.", img: "https://placehold.co/300x200/yellow/black?text=Salvador" },
    ];

    return (
        <div className="page-container">
            <h1>🌍 Nossos Destinos Favoritos</h1>
            <p>Escolha sua próxima aventura:</p>

            <div className="destinos-grid">
                {/* Aqui a mágica do React acontece: Transformando dados em tela */}
                {lugares.map((lugar) => (
                    <div key={lugar.id} className="card-destino">
                        <img src={lugar.img} alt={lugar.nome} />
                        <h3>{lugar.nome}</h3>
                        <p>{lugar.desc}</p>
                        <button>Ver Detalhes</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Destinos;