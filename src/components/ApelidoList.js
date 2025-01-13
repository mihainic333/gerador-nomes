import React, { useState, useEffect } from 'react'

const ApelidoList = () => {
  const [apelidos, setApelidos] = useState([])
  const [novoApelido, setNovoApelido] = useState('')

  useEffect(() => {
    // Busca a lista de apelidos da API
    fetch('/API/apelidos')
      .then((res) => res.json())
      .then((data) => setApelidos(data))
  }, [])

  const adicionarApelido = () => {
    if (novoApelido.trim()) {
      fetch('/API/apelidos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ apelido: novoApelido }),
      })
        .then((res) => res.json())
        .then(() => {
          setApelidos([...apelidos, novoApelido])
          setNovoApelido('')
        })
    }
  }

  return (
    <div>
      <h2>Lista de Apelidos</h2>
      <input
        type="text"
        placeholder="Adicionar Apelido"
        value={novoApelido}
        onChange={(e) => setNovoApelido(e.target.value)}
      />
      <button onClick={adicionarApelido}>Adicionar</button>
      <ul>
        {apelidos.map((apelido, index) => (
          <li key={index}>{apelido}</li>
        ))}
      </ul>
    </div>
  )
}

export default ApelidoList
