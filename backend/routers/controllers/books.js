const db = require("./../../db/db");
const getAllBooks = (req, res) => {
  const query = `SELECT * FROM book`;
  db.query(query, (err, results) => {
    if (err) throw err;
    res.status(201).json(results);
  });
};
const getBooksByCategory = (req, res) => {
  const category = req.params.category_id;
  const query = `SELECT * FROM book WHERE category_id=${category}`;
  db.query(query, (err, results) => {
    if (err) throw err;
    res.status(201).json(results);
  });
};
const deleteBooksByID= (req, res) => {
  
  const book_id = req.params.book_id;

 
  const query = `DELETE FROM book WHERE book_id = "${book_id}";`;
  db.query(query, (err, result) => {
    if (err) {
      throw err;
    }

    res.json(result);
  });
};
module.exports = {
  getAllBooks,
  getBooksByCategory,
  deleteBooksByID
};
