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

<<<<<<< HEAD
}
const getAllProperty=async (req,res)=>{
    try {
        const properties=await Property.findAll();
        res.status(200).send(properties);
    } catch (error) {
        res.status(400).send(error);
    }

}
const getPropertyByTagId=async (req,res)=>{
    try {
        const {tagId}=req.params;
        
        const properties=await Property.findAll({
            where:{
                tagId,
            }
        });
     
        res.status(200).send(properties);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }

}
const getPropertyById=async (req,res)=>{
    try {
        const {propertyId}=req.params;
        
        const property=await Property.findOne({
            where:{
                id:propertyId,
            }
        })
        res.status(200).send(property)
    } catch (error) {
        console.error();
        res.status(400).send(error);
    }

}
module.exports={addProperty,addPropertyItem,getAllTagId,getPropertyByTagId,getPropertyById,getAllProperty};
=======
module.exports = {
  addProperty,
  addPropertyItem,
  getAllTagId,
  getPropertyByTagId,
  getPropertyById,
};
>>>>>>> master
