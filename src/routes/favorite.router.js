const favoriteRouter = require("express").Router();
const {
  addFavorite,
  deleteFavorite,
  getFavorite,
} = require("../controller/favorite.controller");
const { authenticate } = require("../middlewares/auth/authenticate");

const { validateAddFavorite } = require("../middlewares/validation/favorite");

favoriteRouter.get("/list", authenticate, getFavorite);
favoriteRouter.post("/add", authenticate, validateAddFavorite, addFavorite);
favoriteRouter.delete(
  "/:serviceId",
  authenticate,
  validateAddFavorite,
  deleteFavorite
);

module.exports = { favoriteRouter };
