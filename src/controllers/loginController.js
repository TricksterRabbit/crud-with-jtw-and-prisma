const userService = require("../services/userService");
const { comparePassword } = require("../utils/hash");
const generateAccessToken = require("../utils/jwt");

const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;

    const user = await userService.getUserByEmail(email);

    if (await comparePassword(user.password, password)) {
      const token = generateAccessToken(email, user.id);
      return res.status(200).json({ token });
    }
    return res.status(400).json({ message: "Invalid password or email" });
  } catch {
    return res.status(400).json({ message: "Invalid password or email" });
  }
};

module.exports = loginUser;
