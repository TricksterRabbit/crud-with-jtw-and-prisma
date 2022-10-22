const express = require("express");

const loginController = require("./controllers/loginController");
const userController = require("./controllers/userController");
const authenticateToken = require("./middlewares/authenticateToken");
const {
  validateDto,
  validateBodyAndUser,
} = require("./middlewares/validateDto");
const loginUser = require("./schema/login");
const {
  createUser,
  getUserById,
  getUserByEmail,
  editUserReqBody,
  editUserReqUser,
  deleteUserById,
} = require("./schema/user");

const router = express.Router();

router.post("/user/login", validateDto(loginUser), loginController.loginUser);

router.post("/user", validateDto(createUser), userController.createUser);
router.get("/users", authenticateToken, userController.getAllUsers);
router.get(
  "/user",
  authenticateToken,
  validateDto(getUserById),
  userController.getUserById
);
router.get(
  "/user/email",
  validateDto(getUserByEmail),
  userController.getUserByEmail
);
router.put(
  "/user",
  authenticateToken,
  validateBodyAndUser(editUserReqBody, editUserReqUser),
  userController.updateUserById
);
router.delete(
  "/user",
  authenticateToken,
  validateDto(deleteUserById),
  userController.deleteUserById
);

module.exports = router;
