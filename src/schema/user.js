const ajvInstace = require("./ajvInstance");

const createUserSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    email: { type: "string", format: "email" },
    password: { type: "string", format: "password", minLength: 6 },
  },
  required: ["name", "email", "password"],
  additionalProperties: false,
};

const createUser = ajvInstace.compile(createUserSchema);

const getUserByIdSchema = {
  type: "object",
  properties: {
    email: { type: "string", format: "email" },
    id: { type: "integer" },
    iat: { type: "integer" },
    exp: { type: "integer" },
  },
  required: ["id"],
};

const getUserById = ajvInstace.compile(getUserByIdSchema);

const getUserByEmailSchema = {
  type: "object",
  properties: {
    email: { type: "string", format: "email" },
  },
  required: ["email"],
  additionalProperties: false,
};

const getUserByEmail = ajvInstace.compile(getUserByEmailSchema);

const editUserReqBodySchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    email: { type: "string", format: "email" },
    password: { type: "string", format: "password", minLength: 6 },
  },
  additionalProperties: false,
};
const editUserReqUserSchema = {
  type: "object",
  properties: {
    email: { type: "string", format: "email" },
    id: { type: "integer" },
    iat: { type: "integer" },
    exp: { type: "integer" },
  },
  required: ["id"],
};

const editUserReqBody = ajvInstace.compile(editUserReqBodySchema);
const editUserReqUser = ajvInstace.compile(editUserReqUserSchema);

const deleteUserByIdSchema = {
  type: "object",
  properties: {
    email: { type: "string", format: "email" },
    id: { type: "integer" },
    iat: { type: "integer" },
    exp: { type: "integer" },
  },
  required: ["id"],
};

const deleteUserById = ajvInstace.compile(deleteUserByIdSchema);

module.exports = {
  createUser,
  getUserById,
  getUserByEmail,
  editUserReqBody,
  editUserReqUser,
  deleteUserById,
};
