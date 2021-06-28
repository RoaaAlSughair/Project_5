const express = require("express");

const bookRouter = express.Router();

const {
  getAllBooks,
  getBookByTitle,
  getBooksByAuthor,
} = require("./../controllers/books");

bookRouter.get("/", getAllBooks);
bookRouter.get("/books", getBookByTitle);
bookRouter.get("/books", getBooksByAuthor);

module.exports = bookRouter;
