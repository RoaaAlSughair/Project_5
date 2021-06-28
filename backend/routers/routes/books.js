const express = require("express");
const bookRouter = express.Router();
const { getAllBooks, getBooksByCategory,deleteBooksByID,addNewBooks } = require("./../controllers/book");

bookRouter.get("/", getAllBooks);
bookRouter.get("/Category", getBooksByCategory);
bookRouter.delete("/:id", deleteBooksByID);.
bookRouter.post("/", addNewBooks);
module.exports = bookRouter;
