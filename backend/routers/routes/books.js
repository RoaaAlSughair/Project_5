const express = require("express");
const bookRouter = express.Router();
const { getAllBooks, getBooksByCategory,deleteBooksByID,addNewBooks,updateBooksByID } = require("./../controllers/book");

bookRouter.get("/", getAllBooks);
bookRouter.get("/Category", getBooksByCategory);
bookRouter.delete("/:id", deleteBooksByID);
bookRouter.post("/", addNewBooks);
bookRouter.put("/:id", updateBooksByID);
module.exports = bookRouter;
