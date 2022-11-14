const connection = require("./../../../db/db");
const bcrypt = require("bcrypt");

const Register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const query = `INSERT INTO users (firstName, lastName, email, password ,role_id) VALUES (?, ?, ?, ?, ?)`;
  const role_id = 2;

  const data = [
    firstName,
    lastName,
    email.toLowerCase(),
    hashedPassword,
    role_id,
  ];

  connection.query(query, data, (err, results) => {
    if (err) {
      throw err;
    }
    res.status(201).json(results);
  });
};

module.exports = {
  Register,
};
