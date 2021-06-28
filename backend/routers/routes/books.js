const express = require("express");
const bookRouter = express.Router();
const { getAllBooks, getBooksByCategory } = require("./../controllers/book");

bookRouter.get("/", getAllBooks);
bookRouter.get("/Category", getBooksByCategory);
module.exports = bookRouter;
