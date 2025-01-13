import React, { useState } from 'react'

const Gerador = () => {
  const [nomeGerado, setNomeGerado] = useState('')

  const gerarNome = () => {
    fetch('/API/generate')
      .then((res) => res.json())
      .then((data) => setNomeGerado(data.nomeCompleto))
  }

  const handleKeyDown = (event) => {
    if (event.key === ' ') {
      gerarNome()
    }
  }

  return (
    <div onKeyDown={handleKeyDown} tabIndex={0}>
      <h2>Gerador de Nomes</h2>
      <button onClick={gerarNome}>Gerar Nome</button>
      {nomeGerado && <h3>Nome Gerado: {nomeGerado}</h3>}
    </div>
  )
}

export default Gerador
