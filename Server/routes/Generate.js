const express = require("express");
const router = express.Router();


let nomes = ["João", "Maria", "Ana"];
let apelidos = ["Silva", "Santos", "Oliveira"];


router.get("/", (req, res) => {
  if (nomes.length === 0 || apelidos.length === 0) {
    return res.status(400).json({
      message: "É necessário ter pelo menos um nome e um apelido para gerar combinações.",
    });
  }

  const nomesCompletos = nomes.map((nome) => {
    const apelido = apelidos[Math.floor(Math.random() * apelidos.length)];
    return `${nome} ${apelido}`;
  });

  res.json(nomesCompletos);
});

module.exports = router;
