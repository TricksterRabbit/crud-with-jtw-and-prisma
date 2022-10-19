const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const generateAccessToken = (email, id) => {
  return jwt.sign({ email, id }, process.env.TOKEN_SECRET, { expiresIn: "1d" });
};

module.exports = generateAccessToken;
