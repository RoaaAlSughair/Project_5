const express = require("express");

// import middleware
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

// Import functions
const { addToFavorite, removeFromFavorite } = require("../controllers/favorites");

// Create router
const favoriteRouter = express.Router();

// Connect function to router
favoriteRouter.post("/favorite", authentication, authorization("user"), addToFavorite);
favoriteRouter.delete("/favorite/:book_id", authentication, authorization("user"), removeFromFavorite);

// Export router
module.exports = favoriteRouter;
