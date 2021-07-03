const express = require("express");
const bookRouter = express.Router();

const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

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
bookRouter.get("/:category_id", getBooksByCategory);
bookRouter.get("/search_title", getBookByTitle);
bookRouter.get("/search_author", getBooksByAuthor);
bookRouter.delete("/:book_id", authentication, authorization("admin"), deleteBooksByID);
bookRouter.post("/", authentication, authorization("admin"), addNewBooks);
bookRouter.put("/:book_id", authentication, authorization("admin"), updateBooksByID);

module.exports = bookRouter;
