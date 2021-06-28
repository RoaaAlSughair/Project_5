const connection = require("./../../db/db");

const authorization = (token) => {
  return async (req, res, next) => {
      const role_id = req.token.role_id;
    const query = `SELECT roles FROM role WHERE role_id=?`;
    const data = [role_id];
    const user = await connection.query(query,data, (err, result) => {
      if (err) {
        res.status(400).json(err);
      }
    
    });
    if (!user) return res.status(401).json({ message: "forbidden" });

    req.user = user.get();
    next();
  };
};
module.exports = authorization;
              