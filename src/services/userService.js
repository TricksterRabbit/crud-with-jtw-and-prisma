const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createUser = async (name, email, password) => {
  return await prisma.user.create({ data: { name, email, password } });
};

const getAllUsers = async () => await prisma.user.findMany();

const getUserById = async (id) => {
  return await prisma.user.findUnique({ where: { id } });
};

const getUserByEmail = async (email) => {
  return await prisma.user.findUnique({ where: { email } });
};

const updateUserById = async (id, name, email, password) => {
  return await prisma.user.update({
    data: { name, email, password },
    where: { id },
  });
};

const deleteUserById = async (id) => {
  return await prisma.user.delete({ where: { id } });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  getUserByEmail,
  updateUserById,
  deleteUserById,
};
