const service = require("../services/service.service");

const getServiceByBusinessId = async (req, res, next) => {
  try {
    const services = await service.getServiceByBusinessId(req);
    res.status(201).json({
      services,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = { getServiceByBusinessId };
