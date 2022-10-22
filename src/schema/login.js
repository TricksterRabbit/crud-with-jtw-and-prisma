const ajvInstace = require("./ajvInstance");

const loginUserSchema = {
  type: "object",
  properties: {
    email: { type: "string", format: "email" },
    password: { type: "string", format: "password", minLength: 6 },
  },
  required: ["email", "password"],
  additionalProperties: false,
};

const loginUser = ajvInstace.compile(loginUserSchema);

module.exports = loginUser;
