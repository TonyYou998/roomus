const { v4: uuidv4 } = require("uuid");
const { Favorite } = require("../models");

const getFavorite = async (request) => {
  try {
    const favorites = await Favorite.findAll({
      where: { userId: request.user.id },
    });
    return favorites;
  } catch (error) {
    throw error;
  }
};

const addFavorite = async (request) => {
  const { userId, serviceId } = request.body;
  try {
    const existingFavorite = await Favorite.findOne({
      where: { userId, serviceId },
    });
    if (existingFavorite)
      return { msg: "This service existed in your wishlist" };
    const newFavorite = await Favorite.create({
      id: uuidv4(),
      userId,
      serviceId,
    });
    return newFavorite;
  } catch (error) {
    throw error;
  }
};

const deleteFavorite = async (request) => {
  try {
    const serviceId = request.params.serviceId;
    const deleteFavorite = await Favorite.destroy({
      where: { serviceId },
    });

    if (!deleteFavorite)
      return { msg: "Found no favorite with provided service Id" };

    return { msg: "Removed favorite successfully" };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getFavorite,
  addFavorite,
  deleteFavorite,
};
