// const jwt = require('jsonwebtoken');
// const express = require("express");

// const connection = require('./../../db/db');

// const authorization = (string) => {
// 	return (req, res, next) => {
// 		Role
// 			.findById(req.token.role)
// 			.then((result) => {
// 				if (!result.permissions.includes(string))
// 					return res.status(403).json({ message: 'forbidden' });

// 				next();
// 			})
// 			.catch((error) => {
// 				res.status(403).json({ message: 'forbidden' });
// 			});
// 	};
// };

// module.exports = authorization;
