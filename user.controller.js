const User = {
  get: (req, res) => {
    res.status(200).send("buscando un elemento: ");
  },
  // ----------------------------------------------------------------
  list: (req, res) => {
    res.status(200).send("Welcome ");
    // Fetch data from database or API
  },
  // ----------------------------------------------------------------
  create: (req, res) => {
    res.status(201).send("creando... user ");
  },
  // ----------------------------------------------------------------
  update: (req, res) => {
    res.status(204).send("actualizando...user ");
  },
  // ----------------------------------------------------------------
  destroy: (req, res) => {
    res.status(204).send("borrando...user ");
  },
  // Other CRUD methods...
};
module.exports = User;
