const { v4: uuidv4 } = require("uuid");
const { Property, PropertyItem, PropertyTag } = require("../models");

const addProperty = async (req) => {
  try {
    const formData = new FormData();
    for (const key in req.body) {
      formData.append(key, req.body[key]);
    }
    const propertyName = formData.get("propertyName");
    const address = formData.get("address");
    const description = formData.get("description");
    const tagId = formData.get("tagId");

    let image1, image2, image3;
    const arrayImage = req.files;
    arrayImage.map((item, index) => {
      const { filename } = item;
      switch (index) {
        case 0:
          image1 = filename;
          break;
        case 1:
          image2 = filename;
          break;
        case 2:
          image3 = filename;
          break;
        default:
          image1 = filename;
      }
    });

    const property = await Property.create({
      id: uuidv4(),
      propertyName,
      address,
      description,
      // image:`http://34.171.191.196:3000/public/images/property/${filename}`
      image1: `http://localhost:3000/public/images/property/${image1}`,
      image2: `http://localhost:3000/public/images/property/${image2}`,
      image3: `http://localhost:3000/public/images/property/${image3}`,
      tagId,
    });

    return property;
  } catch (error) {
    throw error;
  }
};

const addPropertyItem = async (req) => {
  try {
    const formData = new FormData();
    for (const key in req.body) {
      formData.append(key, req.body[key]);
    }
    const roomName = formData.get("roomName");
    const propertyId = formData.get("propertyId");
    const price = formData.get("price");
    const description = formData.get("description");
    const arrayImage = req.files;
    let image1, image2, image3, image4, image5;

    const propertyItem = await PropertyItem.create({
      id: uuidv4(),
      roomName,
      propertyId,
      price,
      description,
      // need to change this property
      roomStatus: 0,
    });

    return propertyItem;
  } catch (error) {
    next(error);
  }
};

const getAllTagId = async (req, res, next) => {
  try {
    const tags = await PropertyTag.findAll();
    return tags;
  } catch (error) {
    next(error);
  }
};

const getPropertyByTagId = async (req, res, next) => {
  try {
    const { tagId } = req.params;

    const properties = await Property.findAll({
      where: {
        tagId,
      },
    });

    return properties;
  } catch (error) {
    next(error);
  }
};

const getPropertyById = async (req, res, next) => {
  try {
    const { propertyId } = req.params;

    const property = await Property.findOne({
      where: {
        id: propertyId,
      },
    });

    return property;
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
