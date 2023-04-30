const { Service } = require("../models");

const getServiceByBusinessId = async (req) => {
  try {
    const services = await Service.findAll({
      where: { bussinessId: req.params.businessId },
    });
    return services;
  } catch (error) {
    throw error;
  }
};

module.exports = { getServiceByBusinessId };
