const express = require("express");
const categoryRouter = express.Router();

const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

const {
  getAllCategory,
  addNewCategory,
  updateCategory,
  deleteCategory
} = require("./../controllers/category");

categoryRouter.get("/", getAllCategory);
categoryRouter.post(
  "/",
  authentication,
  authorization("admin"),
  addNewCategory
);
categoryRouter.put(
  "/:category_id",
  authentication,
  authorization("admin"),
  updateCategory
);
categoryRouter.delete(
  "/:category_id",
  authentication,
  authorization("admin"),
  deleteCategory
);


module.exports = categoryRouter;
