const connection = require("../../db/db");

const addToFavorite = (req, res) => {
  const { book_id, user_id, total_price } = req.body;
  const data = [book_id, user_id, total_price];
  const query = `INSERT INTO favorite (book_id, user_id, totalPrice) VALUES (?, ?, ?);`;

  connection.query(query, data, (err, result) => {
    if (err) {
      throw err;
    }

    res.status(200).json("Added successfully");
  });
};

const removeFromFavorite = (req, res) => {
  const book_id = req.params.book_id;
  const query = `DELETE FROM favorite WHERE book_id = ${book_id};`;
  connection.query(query, (err, result) => {
    if (err) {
      throw err;
    }

    res.json("Deleted successfully");
  });
};

module.exports = {
  addToFavorite,
  removeFromFavorite,
};
