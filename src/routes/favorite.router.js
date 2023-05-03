const favoriteRouter = require("express").Router();
const { addFavorite } = require("../controller/favorite.controller");
const { validateAddFavorite } = require("../middlewares/validation/favorite");

favoriteRouter.post("/add", validateAddFavorite, addFavorite);

module.exports = { favoriteRouter };
