const favoriteRouter = require("express").Router();
const {
  addFavorite,
  deleteFavorite,
} = require("../controller/favorite.controller");
const { validateAddFavorite } = require("../middlewares/validation/favorite");

favoriteRouter.post("/add", validateAddFavorite, addFavorite);
favoriteRouter.delete("/:favoriteId", validateAddFavorite, deleteFavorite);

module.exports = { favoriteRouter };
