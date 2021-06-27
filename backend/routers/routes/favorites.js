const express = require("express");

// Import functions
const { addToFavorite, removeFromFavorite } = require("../controllers/favorites");

// Create router
const favoriteRouter = express.Router();

// Connect function to router
favoriteRouter.post("/favorite", addToFavorite);
favoriteRouter.delete("/favorite/:book_id", removeFromFavorite);

// Export router
module.exports = favoriteRouter;

// to be used in server.js:
/*
in routers:
const favoriteRouter = require("./routers/routes/favorites");

in app routers:
app.use(favoriteRouter);
*/