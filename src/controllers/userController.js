const userService = require("../services/userService");
const { encrypt } = require("../utils/hash");

const createUser = async (req, res) => {
  let { name, email, password } = req.body;

  const encryptedPassword = await encrypt(password);

  const user = await userService.createUser(name, email, encryptedPassword);

  if (user !== null)
    res.status(201).json({ message: "user created successfully" });
  else res.status(400);
};

const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();

  res.status(200).json({ users });
};

const getUserById = async (req, res) => {
  const user = await userService.getUserById(req.user.id);

  res.status(200).json(user);
};

const getUserByEmail = async (req, res) => {
  let { email } = req.body;

  const user = await userService.getUserByEmail(email);

  res.status(200).json(user);
};

const updateUserById = async (req, res) => {
  let { name, email, password } = req.body;

  if (!password) {
    await userService.updateUserById(req.user.id, name, email);
  } else {
    const encryptedPassword = await encrypt(password);

    await userService.updateUserById(
      req.user.id,
      name,
      email,
      encryptedPassword
    );
  }

  res.status(200).json({ message: "user modified successfully" });
};

const deleteUserById = async (req, res) => {
  await userService.deleteUserById(req.user.id);

  res.status(200).json({ message: "users successfully deleted" });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  getUserByEmail,
  updateUserById,
  deleteUserById,
};
