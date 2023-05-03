const { Role } = require("../models");
const HttpError = require("../utils/error");

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
    if (!role) throw new HttpError(`Found no role with provided Id`, 400);
    return role;
  } catch (error) {
    throw error;
  }
};

module.exports = { addRole, getRoleById };
