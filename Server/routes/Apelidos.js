const express = require("express");
const router = express.Router();
const Apelido = require("../models/Apelido"); 
let apelidos = [];


router.post("/", (req, res) => {
  const { apelido } = req.body;

  if (!apelido) {
    return res.status(400).json({ message: "O campo 'apelido' é obrigatório." });
  }
  
  const novoApelido = { id: apelidos.length + 1, apelido };
  apelidos.push(novoApelido);
  res.status(201).json({ message: "Apelido adicionado com sucesso!", apelido: novoApelido });
});

router.get("/", (req, res) => {
  res.json(apelidos);
});

module.exports = router;
