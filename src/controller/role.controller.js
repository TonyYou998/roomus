const service = require("../services/role.service");
const { validationResult } = require("express-validator");
const HttpError = require("../utils/error");

const addRole = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw new HttpError(`Invalid inputs passed!`, 422);
    const newRole = await service.addRole(req);
    res.status(201).json({
      role: newRole,
    });
  } catch (error) {
    next(error);
  }
};

const getRoleById = async (req, res, next) => {
  try {
    if (!req.params.id) throw new HttpError(`Require roleId!`, 422);
    const role = await service.getRoleById(req);
    res.status(200).json({
      role: role,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { addRole, getRoleById };
