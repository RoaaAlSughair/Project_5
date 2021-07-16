const express = require("express");

const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

const {
  addToShoppingCart,
  removeFromShoppingCart,
} = require("../controllers/shopping_cart");

const shoppingCartRouter = express.Router();

shoppingCartRouter.post(
  "/cart",
  authorization,
  authorization("user"),
  addToShoppingCart
);

shoppingCartRouter.delete(
  "/cart/:book_id",
  authentication,
  authorization("user"),
  removeFromShoppingCart
);

module.exports = shoppingCartRouter;
