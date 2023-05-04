const { BussinessProfile } = require("../models");
const { v4: uuidv4 } = require("uuid");

const createBusiness = async (req) => {
  try {
    const {
      fullname,
      email,
      nameHost,
      address,
      description,
      taxNumber,
      userId,
    } = req.body;

    const newBusiness = await BussinessProfile.create({
      id: uuidv4(),
      fullname,
      email,
      nameHost,
      address,
      description,
      taxNumber,
      userId,
    });

    return {
      newBusiness,
    };
  } catch (error) {
    error.status = error.status || 400;
    throw error;
  }
};

const getBusinessByUserId = async (req) => {
  try {
    const userId = req.user.id;
    const business = await BussinessProfile.findOne({
      where: { userId },
    });

    if (!business) return { msg: "Found no business with provided userId" };

    return business;
  } catch (error) {
    error.status = error.status || 400;
    console.log(error);
    throw error;
  }
};

module.exports = { createBusiness, getBusinessByUserId };
