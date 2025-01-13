const express = require("express");
const mongoose = require("mongoose");
const app = express();
const user = require("./user.controller");
const port = 3000;
// creando un middleware
app.use(express.json());
// conectando la base de datos mongo db
mongoose.connect(
  "mongodb+srv://Hakdigital98:Adivinala123@ricardi.j4xrm.mongodb.net/?retryWrites=true&w=majority&appName=Ricardi"
);

app.get("/", user.list);
// endpoint post
app.post("/", user.create);
// 201 se ultiliza cuando se a creado con exito
//----------------------------------------------
// end point con get
app.get("/:id", user.get);
// end point con put
app.put("/:id", user.update);
// endpoint con patch
app.patch("/:id", user.update);
// end point con delete
app.delete("/:id", user.destroy);
app.listen(port, () => {
  console.log("arrancando la aplicación");
});

// Middleware para verificar el token
