const Users = require("./user");

const User = {
  get: async (req, res) => {
    const { id } = req.params;
    const user = await Users.findOne({ _id: id });

    res.status(200).send("buscando un elemento con el id: " + user);
  },
  // ----------------------------------------------------------------
  list: async (req, res) => {
    const users = await Users.find();
    res.status(200).send(users);
    // Fetch data from database or API
  },
  // ----------------------------------------------------------------
  create: async (req, res) => {
    console.log(req.body);
    const user = new Users(req.body);
    const savedUser = await user.save();
    res.status(201).send("creando usuario..." + savedUser.id);
  },
  // ----------------------------------------------------------------
  update: async (req, res) => {
    const { id } = req.params;
    const user = await Users.findOne({ _id: id });
    Object.assign(user, req.body);
    await user.save();
    res.sendStatus(204);
  },
  // ----------------------------------------------------------------
  destroy: async (req, res) => {
    // res.status(204).send("borrando...user ");
    const { id } = req.params;
    const user = await Users.findOne({ _id: id });
    if (user) {
      await user.deleteOne();
    }
    res.sendStatus(204);
    // Use mongoose's remove method to delete the user from the database.
  },
  // Other CRUD methods...
};
module.exports = User;
