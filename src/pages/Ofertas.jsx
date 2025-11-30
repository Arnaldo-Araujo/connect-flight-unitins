import React from 'react';

function Ofertas() {
    return (
        <div className="page-container">
            <h1>🔥 Ofertas Relâmpago</h1>
            <p>Corra! Esses preços acabam em 24h.</p>

            <div className="ofertas-container">
                {/* Card de Oferta 1 */}
                <div className="card-oferta">
                    <span className="tag-desconto">-40% OFF</span>
                    <h2>Pacote Cancún</h2>
                    <p className="preco-antigo">De R$ 5.000</p>
                    <p className="preco-novo">Por R$ 2.999</p>
                    <p className="obs">*Aéreo + Hotel All Inclusive</p>
                    <button className="btn-comprar">Garantir Vaga</button>
                </div>

                {/* Card de Oferta 2 */}
                <div className="card-oferta destaque">
                    <span className="tag-desconto">-50% OFF</span>
                    <h2>Fim de Ano em Noronha</h2>
                    <p className="preco-antigo">De R$ 8.000</p>
                    <p className="preco-novo">Por R$ 3.999</p>
                    <p className="obs">*Apenas 3 vagas restantes</p>
                    <button className="btn-comprar">Garantir Vaga</button>
                </div>
            </div>
        </div>
    );
}

export default Ofertas;