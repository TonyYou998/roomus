const service = require("../services/business.service");
const { validationResult } = require("express-validator");
const HttpError = require("../utils/error");

const createBusiness = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      throw new HttpError(
        `Invalid input passed. Please check your input again`,
        422
      );

    const { user, token } = await service.createBusiness(req);
    res.status(201).json({
      user,
      token,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createBusiness };