const express = require("express");

const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

const {
  addToFavorite,
  removeFromFavorite,
} = require("../controllers/favorites");

const favoriteRouter = express.Router();

favoriteRouter.post(
  "/favorite",
  authentication,
  authorization("user"),
  addToFavorite
);

favoriteRouter.delete(
  "/favorite/:book_id",
  authentication,
  authorization("user"),
  removeFromFavorite
);

module.exports = favoriteRouter;
