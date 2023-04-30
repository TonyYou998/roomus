const service = require("../services/service.service");

const getServices = async (req, res, next) => {
  try {
    const services = await service.getServices(req);
    res.status(201).json({
      services,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = { getServices };
