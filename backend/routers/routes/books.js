const express = require("express");
const bookRouter = express.Router();
const {
  getAllBooks,
  getBooksByCategory,
  deleteBooksByID,
  addNewBooks,
  updateBooksByID,
  getBooksByAuthor,
  getBookByTitle,
} = require("./../controllers/books");

bookRouter.get("/", getAllBooks);
bookRouter.get("/Category", getBooksByCategory);
bookRouter.get("/books", getBookByTitle);
bookRouter.get("/books", getBooksByAuthor);
bookRouter.delete("/:id", deleteBooksByID);
bookRouter.post("/", addNewBooks);
bookRouter.put("/:id", updateBooksByID);

module.exports = bookRouter;
