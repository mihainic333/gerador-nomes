const express = require("express");
const router = express.Router();
const Nome = require("../models/Nome"); 
let nomes = [];


router.post("/", (req, res) => {
  const { nome } = req.body;

  if (!nome) {
    return res.status(400).json({ message: "O campo 'nome' é obrigatório." });
  }

  const novoNome = { id: nomes.length + 1, nome };
  nomes.push(novoNome);
  res.status(201).json({ message: "Nome adicionado com sucesso!", nome: novoNome });
});


router.get("/", (req, res) => {
  res.json(nomes);
});

module.exports = router;

