const userService = require("../services/userService");
const generateAccessToken = require("../utils/jwt");

const createUser = async (req, res) => {
  let { name, email, password } = req.body;

  const user = await userService.createUser(name, email, password);

  const token = generateAccessToken(email, user.id);

  res.status(201).json({ token });
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

  await userService.updateUserById(req.user.id, name, email, password);

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
