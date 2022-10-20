const bcrypt = require("bcrypt");

const encrypt = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const comparePassword = async (passwordEncrypt, password) => {
  return await bcrypt.compare(password, passwordEncrypt);
};

module.exports = { encrypt, comparePassword };
