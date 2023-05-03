const { v4: uuidv4 } = require("uuid");
const { Favorite } = require("../models");

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

module.exports = {
  addFavorite,
};
