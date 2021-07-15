const connection = require("../../db/db");

const addToShoppingCart = (req, res) => {
  const { quantity, book_id, user_id, total_price } = req.body;
  const data = [quantity, book_id, user_id, total_price];
  const query = `INSERT INTO cart (quantity, book_id, user_id, totalPrice) VALUES (?, ?, ?, ?);`;

  connection.query(query, data, (err, result) => {
    if (err) {
      throw err;
    }

    res.status(200).json("Added successfully");
  });
};

const removeFromShoppingCart = (req, res) => {
  const book_id = req.params.book_id;
  const query = `DELETE FROM cart WHERE book_id = ${book_id};`;

  connection.query(query, (err, result) => {
    if (err) {
      throw err;
    }

    res.json(result);
  });
};

module.exports = {
  addToShoppingCart,
  removeFromShoppingCart,
};
