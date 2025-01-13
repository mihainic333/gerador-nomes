import React, { useState, useEffect } from 'react'

const Historico = () => {
  const [historico, setHistorico] = useState([])

  useEffect(() => {
    // Busca o histórico de nomes gerados da API
    fetch('/API/generate/historico')
      .then((res) => res.json())
      .then((data) => setHistorico(data))
  }, [])

  return (
    <div>
      <h2>Histórico de Nomes Gerados</h2>
      <ul>
        {historico.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
    </div>
  )
}

export default Historico
