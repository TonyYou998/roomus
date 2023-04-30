const { Role } = require("../models");

const addRole = async (req) => {
  try {
    const newRole = await Role.create(req.body);
    return newRole;
  } catch (error) {
    error.status = error.status || 400;
    throw error;
  }
};

const getRoleById = async (req) => {
  try {
    const role = await Role.findOne({ id: req.params.id });
    return role;
  } catch (error) {
    throw error;
  }
};

module.exports = { addRole, getRoleById };
