const { UserAccount } = require("../models");
const { v4: uuidv4 } = require("uuid");
const { ROLE } = require("../utils/constants/role");

const register = async (req) => {
  try {
    const { email, password, username, fullname, phone } = req.body;
    console.log(fullname);
    const newUser = await UserAccount.create({
      id: uuidv4(),
      role: ROLE.CLIENT,
      email,
      password: password,
      username,
      fullname,
      phone,
    });
    const { token } = await newUser.generateAuthToken();

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
    const user = await UserAccount.findByCredentials(req.body);
    const { token } = await user.generateAuthToken();
    return {
      user: user,
      token,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = { register, login };
