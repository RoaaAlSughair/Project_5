const express = require("express");

const {
  Comments,
  UpdateComments,
  DeleteComment,
} = require("./../controllers/comments");

const CommentsRouter = express.Router();

CommentsRouter.post("/Comments", Comments);
CommentsRouter.put("/Update/:comment_id", UpdateComments);
CommentsRouter.delete("/delete/:comment_id", DeleteComment);

module.exports = CommentsRouter;
