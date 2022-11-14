const connection = require("./../../db/db");

const authorization = (role) => {
  return (req, res, next) => {
    const user_id = req.token.user_id;
    const query = `SELECT role_id FROM users WHERE user_id=?;`;
    const data = [user_id];

    connection.query(query, data, (err, result) => {
      if (err) {
        res.status(400).json(err);
      } else {
        if (role === "admin") role = 1;
        else if (role === "user") role = 2;
        else role = 0;

        if (result[0].role_id === role) {
          next();
        } else {
          return res.status(401).json({ message: "forbidden" });
        }
      }
    });
  };
};

module.exports = authorization;
