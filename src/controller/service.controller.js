const serviceService = require("../services/service.service");
const { validationResult } = require("express-validator");
const HttpError = require("../utils/error");

const getServiceByBusinessId = async (req, res, next) => {
  try {
    const services = await serviceService.getServiceByBusinessId(req);
    res.status(201).json({
      services,
    });
  } catch (error) {
    next(error);
  }
};
const getServiceItemByBusinessId = async (req, res, next) => {
  try {
    const servicesItem = await serviceService.getServiceItemByBusinessId(req);
    res.status(200).json({
      servicesItem,
    });
  } catch (error) {
    next(error);
  }
};

const addService = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw new HttpError(`Invalid inputs passed!`, 422);
    const request = req.body;
    const dto = await serviceService.addService(request);
    res.status(201).send(dto);
  } catch (error) {
    next(error);
  }
};
const updateServiceItem = async (req, res, next) => {
  try {
    if (!req.params.serviceItemId)
      throw new HttpError(`Require service item Id`, 422);
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw new HttpError(`Invalid inputs passed!`, 422);

    const dto = await serviceService.updateServiceItem(req);
    res.status(200).send(dto);
  } catch (error) {
    next(error);
  }
};
const deleteServiceItem = async (req, res, next) => {
  try {
    if (!req.params.serviceItemId)
      throw new HttpError(`Require service item Id`, 422);
    const dto = await serviceService.deleteServiceItem(req);

    res.status(200).send(dto);
  } catch (error) {
    next(error);
  }
};

const deleteService = async (req, res, next) => {
  try {
    if (!req.params.serviceId) throw new HttpError(`Require serviceId`, 422);
    const dto = await serviceService.deleteService(req);

    res.status(200).send(dto);
  } catch (error) {
    next(error);
  }
};

const deleteServiceByServiceType = async (req, res, next) => {
  try {
    if (!req.params.serviceTypeId)
      throw new HttpError(`Require serviceTypeId`, 422);
    const dto = await serviceService.deleteByServiceType(req);

    res.status(200).send(dto);
  } catch (error) {
    next(error);
  }
};

const searchBusinessService = async (req, res, next) => {
  try {
    const dto = await serviceService.searchBusinessService(req);
    res.status(200).json(dto);
  } catch (error) {
    next(error);
  }
};
const addServiceType = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw new HttpError(`Invalid inputs passed!`, 422);
    const request = req.body;
    const dto = await serviceService.addServiceType(request);
    res.status(201).send(dto);
  } catch (error) {
    next(error);
  }
};
const getServiceItems = async (req, res, next) => {
  try {
    const { serviceId } = req.params;
    const dto = await serviceService.getServiceItemsByServiceId(serviceId);
    return res.status(200).send(dto);
  } catch (error) {
    next(error);
  }
};
const addServiceItem = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw new HttpError(`Invalid inputs passed!`, 422);
    const request = req.body;
    const dto = await serviceService.addServiceItem(request);
    res.status(201).send(dto);
  } catch (error) {
    next(error);
  }
};
const getServices = async (req, res, next) => {
  try {
    const dto = await serviceService.getServices();
    res.status(200).send(dto);
  } catch (error) {
    next(error);
  }
};
const getDetailServiceItemById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const dto = await serviceService.getDetailItemById(id);

    res.status(200).send(dto);
  } catch (error) {
    next(error);
  }
};
const filterService = async (req, res, next) => {
  try {
    const { serviceTypeId } = req.params;
    const dto = await serviceService.getServiceByServiceTypeId(serviceTypeId);
    res.status(200).send(dto);
  } catch (error) {
    next(error);
  }
};

const getDetailService = async (req, res, next) => {
  try {
    const { serviceId } = req.params;
    const dto = await serviceService.getDetailServiceById(serviceId);
    res.status(200).send(dto);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getDetailService,
  filterService,
  addService,
  deleteService,
  addServiceType,
  updateServiceItem,
  deleteServiceItem,
  getServices,
  addServiceItem,
  getServiceItems,
  getServiceByBusinessId,
  getDetailServiceItemById,
  getServiceItemByBusinessId,
  searchBusinessService,
  deleteServiceByServiceType,
};
