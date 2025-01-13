const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Hakdigital98:Adivinala123@ricardi.j4xrm.mongodb.net/?retryWrites=true&w=majority&appName=Ricardi"
);
// modelo que tendra
const User = mongoose.model("user", {
  username: String,
  edad: Number,
  favoritefood: String,
});
// ------------------------
// function que creeara el user basandose en el model
const crear = async () => {
  const user = new User({
    username: "ana maria",
    edad: 24,
    favoritefood: "pollo salsa verde",
  });
  const savedUser = await user.save();
  console.log(savedUser);
  console.log("creado con exito");
  console.log("----------😎----------");
  // user.save(); retorna una promesa
};
// llamando a la funcion
// crear();

const buscarTodo = async () => {
  const users = await User.find();
  console.log(users);
  console.log("estos son los usuarios creados en la coleccion de User ");
};
// llamando a la funcion
buscarTodo();

const buscarUno = async () => {
  const user = await User.findOne({ username: "yakuza" });
  console.log(user);
  console.log("este es el usuario buscado por username ");
};
// llamando a la funcion
// buscarUno();

const buscar = async () => {
  const user = await User.find({ username: "yakuza" });
  console.log(user);
  console.log("estosa son  los usuarios o usuario buscado por username ");
};
// llamando a la funcion
// buscar();

const actualizar = async () => {
  const user = await User.findOneAndUpdate(
    // buscamos por el campo de username
    { username: "yakuza" },
    // seguimos con el dato que vamos a actualizar
    { favoritefood: "chilaquiles" }
  );
  console.log(user);
  console.log("usuario actualizado con exito");
};

// llamando a la funcion
// actualizar();

const eliminar = async () => {
  const user = await User.findOneAndDelete({ username: "Ricardo" });
  console.log(user);
  console.log("usuario eliminado con exito");
};
// eliminar();
