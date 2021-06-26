const connection = require("./../../db/db");

const authorization = () => {
  return async (req, res, next) => {
    const user = await connection.users.findById(req.token.role_id);
    console.log(token);

    if (!user) return res.status(401).json({ message: "forbidden" });

    req.user = user.get();
    next();
  };
};
module.exports = authorization;
