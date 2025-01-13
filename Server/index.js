const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

const nomesRoutes = require("./routes/nomes");
const apelidosRoutes = require("./routes/apelidos");
const generateRoutes = require("./routes/generate");

app.use("/API/nomes", nomesRoutes);
app.use("/API/apelidos", apelidosRoutes);
app.use("/API/generate", generateRoutes);
app.listen(port, () => {

  console.log(`À escuta em http://localhost:${port}`);
});





