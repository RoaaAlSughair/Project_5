const express = require("express");

const {Comments} = require('./../controllers/comments')

const CommentsRouter = express.Router();

CommentsRouter.post('/Comments',Comments);

module.exports=CommentsRouter;