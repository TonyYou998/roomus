const { Service } = require("../models");

const getServices = async (req) => {
  try {
    const services = await Service.findAll();
    return services;
  } catch (error) {
    throw error;
  }
};

module.exports = { getServices };
