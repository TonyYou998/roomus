const service = require("../services/favorite.service");
const { validationResult } = require("express-validator");
const HttpError = require("../utils/error");

const addFavorite = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      throw new HttpError(`Require service ID and business ID!`, 400);
    const dto = await service.addFavorite(req);
    res.status(201).send(dto);
  } catch (error) {
    next(error);
  }
};

const deleteFavorite = async (req, res, next) => {
  try {
    if (!req.params.favoriteId)
      throw new HttpError(`Require favorite ID.`, 400);
    const dto = await service.deleteFavorite(req);
    res.status(200).send(dto);
  } catch (error) {
    next(error);
  }
};

module.exports = { addFavorite, deleteFavorite };
