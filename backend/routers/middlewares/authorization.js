const connection = require("./../../db/db");

const authorization = (role) => {
  return (req, res, next) => {
    const role_id = req.token.role_id;
    const query = `SELECT role FROM roles WHERE role_id=?`;
    const data = [role_id];
    connection.query(query, data, (err, result) => {
      if (err) {
        res.status(400).json(err);
      } else {
        if (result[0].role == role) {
          next();
        }
        return res.status(401).json({ message: "forbidden" });
      }

    });
  };
};
module.exports = authorization;
