import React from 'react';

function Contato() {

    // Funçãozinha simples pra dar um feedback pro usuário
    const handleEnviar = (e) => {
        e.preventDefault(); // Evita que a página recarregue (conceito importante!)
        alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    };

    return (
        <div className="page-container">
            <h1>📞 Fale Conosco</h1>
            <p>Dúvidas? Quer personalizar um pacote? Mande um oi!</p>

            <form className="form-contato" onSubmit={handleEnviar}>
                <div className="campo">
                    <label>Seu Nome:</label>
                    <input type="text" placeholder="Ex: João da Silva" required />
                </div>

                <div className="campo">
                    <label>Seu Email:</label>
                    <input type="email" placeholder="joao@email.com" required />
                </div>

                <div className="campo">
                    <label>Mensagem:</label>
                    <textarea rows="4" placeholder="Gostaria de saber mais sobre..."></textarea>
                </div>

                <button type="submit" className="btn-enviar">Enviar Mensagem</button>
            </form>
        </div>
    );
}

export default Contato;