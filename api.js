const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Welcome");
});

// endpoint
app.post("/", (req, res) => {
  res.status(201).send("creando user con post");
  // 201 se ultiliza cuando se a creado con exito
});
//----------------------------------------------------------------

app.listen(port, () => {
  console.log("arrancando la aplicación");
});

// Middleware para verificar el token
