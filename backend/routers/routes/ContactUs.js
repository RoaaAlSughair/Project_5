const express = require("express");

const {ContactUs} = require('./../controllers/ContactUs')

const ContactUsRouter = express.Router();

ContactUsRouter.post('/ContactUs',ContactUs);

module.exports=ContactUsRouter;