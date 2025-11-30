import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // O CSS global do projeto
import App from './App.jsx'

// Aqui é onde o React "nasce". Ele pega a div 'root' do HTML e joga o App dentro.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
