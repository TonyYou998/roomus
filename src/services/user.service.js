const { UserAccount } = require("../models");
const { v4: uuidv4 } = require("uuid");
const { ROLE } = require("../utils/constants/role");
const bcrypt = require("bcryptjs");

const userProfile = async (req, res, next) => {
  try {
    return { user: req.user };
  } catch (error) {
    next(error);
  }
};

const register = async (req) => {
  try {
    const { email, password, username, fullname, phone } = req.body;

    let newUser = await UserAccount.create({
      id: uuidv4(),
      role: ROLE.CLIENT,
      email,
      password,
      username,
      fullname,
      phone,
    });
    const { token } = await newUser.generateAuthToken();
    newUser = newUser.get();
    delete newUser.password;
    return {
      user: newUser,
      token,
    };
  } catch (error) {
    error.status = error.status || 400;
    throw error;
  }
};

const login = async (req) => {
  try {
    let user = await UserAccount.findByCredentials(req.body);
    const { token } = await user.generateAuthToken();
    user = user.get();
    delete user.password;
    return {
      user,
      token,
    };
  } catch (error) {
    throw error;
  }
};

const deleteProfile = async (req) => {
  try {
    let deleteUser = await UserAccount.destroy({ where: { id: req.user.id } });
    if (!deleteUser)
      return { msg: "An error occur. User account cannot be deleted." };
    return { msg: "User account deleted successfully." };
  } catch (error) {
    throw error;
  }
};
module.exports = { userProfile, register, login, deleteProfile };
