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

    const { newBusiness } = await service.createBusiness(req);
    res.status(201).json({
      business: newBusiness,
    });
  } catch (error) {
    next(error);
  }
};

const getBusinessByUserId = async (req, res, next) => {
  try {
    const business = await service.getBusinessByUserId(req);
    res.status(200).json({
      business,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createBusiness, getBusinessByUserId };
