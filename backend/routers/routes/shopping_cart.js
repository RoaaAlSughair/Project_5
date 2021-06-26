const express = require("express");

// Import functions
const { addToShoppingCart } = require("../controllers/shopping_cart");

// Create router
const shoppingCartRouter = express.Router();

// Connect function to router
shoppingCartRouter.post("/cart", addToShoppingCart);

// Export router
module.exports = shoppingCartRouter;

// to be used in server.js:
/*
in requirements:
require("dotenv").config();

in routers:
const shoppingCartRouter = require("./routers/routes/shopping_cart");

in app routers:
app.use(shoppingCartRouter);
*/