const express = require("express");
const app = express();
const user = require("./user.controller");
const port = 3000;

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
