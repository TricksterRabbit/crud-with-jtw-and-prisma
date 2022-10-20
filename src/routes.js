const express = require("express");

const loginUser = require("./controllers/loginController");
const userController = require("./controllers/userController");
const authenticateToken = require("./middlewares/authenticateToken");

const router = express.Router();

router.post("/user/login", loginUser);

router.post("/user", userController.createUser);
router.get("/users", authenticateToken, userController.getAllUsers);
router.get("/user", authenticateToken, userController.getUserById);
router.get("/user/email", authenticateToken, userController.getUserByEmail);
router.put("/user", authenticateToken, userController.updateUserById);
router.delete("/user", authenticateToken, userController.deleteUserById);

module.exports = router;
