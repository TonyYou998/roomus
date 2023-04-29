const { v4: uuidv4 } = require("uuid");
const { Property, PropertyItem, PropertyTag } = require("../models");
const service = require("../services/property.service");

const addProperty = async (req, res, next) => {
  try {
    const property = await service.addProperty(req);

    res.status(201).send(property);
  } catch (error) {
    next(error);
  }
};

const addPropertyItem = async (req, res, next) => {
  try {
    const propertyItem = await service.addPropertyItem(req);

    res.status(201).send(propertyItem);
  } catch (error) {
    next(error);
  }
};

const getAllTagId = async (req, res, next) => {
  try {
    const tags = await service.getAllTagId(req);

    res.status(200).send(tags);
  } catch (error) {
    next(error);
  }
};

const getPropertyByTagId = async (req, res, next) => {
  try {
    const properties = await service.getPropertyByTagId(req);

    res.status(200).send(properties);
  } catch (error) {
    next(error);
  }
};

const getPropertyById = async (req, res, next) => {
  try {
    const property = await service.getPropertyById(req);

    res.status(200).send(property);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addProperty,
  addPropertyItem,
  getAllTagId,
  getPropertyByTagId,
  getPropertyById,
};
