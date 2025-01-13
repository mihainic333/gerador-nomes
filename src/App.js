import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import NomeList from './components/NomeList'
import ApelidoList from './components/ApelidoList'
import Gerador from './components/Gerador'
import Historico from './components/Historico'
import './App.css'

const App = () => {
  return (
    <Router>
      <div style={{ textAlign: 'center', margin: '50px' }}>
        <h1 id='neon'>Gerador</h1>
        <h1 id='flux'>de Nomes</h1>
        <nav>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li id='neon-border'>
              <Link to="/nomes" style={linkStyle}>
                Gerenciar Nomes
              </Link>
            </li>
            <li id='neon-border'>
              <Link to="/apelidos" style={linkStyle}>
                Gerenciar Apelidos
              </Link>
            </li>
            <li id='neon-border'>
              <Link to="/gerador" style={linkStyle}>
                Gerar Nome
              </Link>
            </li>
            <li id='neon-border'>
              <Link to="/historico" style={linkStyle}>
                Histórico de Nomes
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/nomes" element={<NomeList />} />
        <Route path="/apelidos" element={<ApelidoList />} />
        <Route path="/gerador" element={<Gerador />} />
        <Route path="/historico" element={<Historico />} />
      </Routes>
    </Router>
  )
}

const linkStyle = {
  textDecoration: 'none',
  color: '#007BFF',
  fontSize: '18px',
  margin: '10px',
  display: 'inline-block',
}

export default App
