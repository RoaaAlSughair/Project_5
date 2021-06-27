const connection = require("./../../db/db");

const authorization = () => {
  return async (req, res, next) => {
    const id = req.params.user_id;
    const query = `SELECT* FROM users WHERE user_id=?`;
    const data = [id];
    const user = await connection.query(query,data, (err, result) => {
      if (err) {
        res.status(400).json(err);
      }
      res.status(201).json(result);
    });

    if (!user) return res.status(401).json({ message: "forbidden" });

    req.user = user.get();
    next();
  };
};
module.exports = authorization;
              