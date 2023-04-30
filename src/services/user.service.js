const { User } = require("../models");
const { v4: uuidv4 } = require("uuid");
const { ROLE } = require("../utils/constants/role");

const register = async (req) => {
  try {
    const { email, password, username, fullname, phone } = req.body;
    const newUser = await User.create({
      id: uuidv4(),
      role: ROLE.CLIENT,
      email,
      password: password,
      username,
      fullname,
      phone,
    });
    const { token } = newUser.generateAuthToken();

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
    const user = await User.findByCredentials(req.body);
    const { token } = await user.generateAuthToken();
    return {
      token,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = { register, login };
