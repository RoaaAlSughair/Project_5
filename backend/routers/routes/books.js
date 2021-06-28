const express = require("express");
const bookRouter = express.Router();
const { getAllBooks, getBooksByCategory,deleteBooksByID } = require("./../controllers/book");

bookRouter.get("/", getAllBooks);
bookRouter.get("/Category", getBooksByCategory);
bookRouter.delete("/:id", deleteBooksByID);
module.exports = bookRouter;
