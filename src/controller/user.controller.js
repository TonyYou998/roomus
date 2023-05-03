const service = require("../services/user.service");
const { validationResult } = require("express-validator");
const HttpError = require("../utils/error");

const register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      throw new HttpError(`Invalid username/email or password passed!`, 422);

    const { user, token } = await service.register(req);
    res.status(201).json({
      user,
      token,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      throw new HttpError(`Invalid username/email or password passed!`, 422);

    const { user, token } = await service.login(req);
    res.json({
      user,
      token,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };
