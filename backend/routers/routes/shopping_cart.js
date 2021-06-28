const express = require("express");

// import middleware
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

// Import functions
const { addToShoppingCart, removeFromShoppingCart } = require("../controllers/shopping_cart");

// Create router
const shoppingCartRouter = express.Router();

// Connect function to router
shoppingCartRouter.post("/cart", authorization, authorization("user"), addToShoppingCart);
shoppingCartRouter.delete("/cart/:book_id" , authentication, authorization("user"), removeFromShoppingCart);

// Export router
module.exports = shoppingCartRouter;
