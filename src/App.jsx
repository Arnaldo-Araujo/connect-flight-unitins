import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Aqui eu importo as partes que ficam fixas no site (cabeçalho e rodapé)
import Header from './components/Header';
import Footer from './components/Footer';

// Aqui trago as páginas que vão ficar trocando no meio da tela
import Main from './components/Main'; // O Main é tipo a minha página inicial (Home)
import Destinos from './pages/Destinos';
import Ofertas from './pages/Ofertas';
import Contato from './pages/Contato';

function App() {
  return (
    <BrowserRouter>
      {/* O Header fica fora das rotas pra ele aparecer em todas as páginas sem recarregar */}
      <Header />

      <Routes>
        {/* Se o endereço for só a barra "/", mostra a página principal */}
        <Route path="/" element={<Main />} />

        {/* Aqui defini os caminhos para as outras páginas do site */}
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      {/* O rodapé também fica fixo no final de tudo */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;