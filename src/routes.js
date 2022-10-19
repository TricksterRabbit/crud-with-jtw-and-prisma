const express = require("express");

const userController = require("./controllers/userControllers");
const authenticateToken = require("./middlewares/authenticateToken");

const router = express.Router();

router.post("/user", userController.createUser);
router.get("/users", authenticateToken, userController.getAllUsers);
router.get("/user", authenticateToken, userController.getUserById);
router.get("/user/email", authenticateToken, userController.getUserByEmail);
router.put("/user", authenticateToken, userController.updateUserById);
router.delete("/user", authenticateToken, userController.deleteUserById);

module.exports = router;
