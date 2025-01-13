import React, { useState, useEffect } from 'react'

const NomeList = () => {
  const [nomes, setNomes] = useState([])
  const [novoNome, setNovoNome] = useState('')

  useEffect(() => {
    // Busca a lista de nomes da API
    fetch('/API/nomes')
      .then((res) => res.json())
      .then((data) => setNomes(data))
  }, [])

  const adicionarNome = () => {
    if (novoNome.trim()) {
      fetch('/API/nomes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome: novoNome }),
      })
        .then((res) => res.json())
        .then(() => {
          setNomes([...nomes, novoNome])
          setNovoNome('')
        })
    }
  }

  return (
    <div>
      <h2>Lista de Nomes</h2>
      <input
        type="text"
        placeholder="Adicionar Nome"
        value={novoNome}
        onChange={(e) => setNovoNome(e.target.value)}
      />
      <button onClick={adicionarNome}>Adicionar</button>
      <ul>
        {nomes.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
    </div>
  )
}

export default NomeList
