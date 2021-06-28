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
const addNewBooks= (req, res) => {
  const { img_book,title, description , publisher,edition,pages , price,author } = req.body;
  const query = `INSERT INTO book (mg_book,title, description , publisher,edition,pages , price,author) VALUES (?, ?, ?, ?,?, ?, ?, ?)`;
  const data = [img_book,title, description , publisher,edition,pages , price,author];
  db.query(query, data, (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.json(results);
  });
};

const updateBooksByID =(req, res) => {
  const id = req.params.book_id;
  const { img_book,title, description , publisher,edition,pages , price,author } = req.body;
  const query = `UPDATE book SET img_book=?,title=?, description=? , publisher=?,edition=?,pages=? , price=?,author=? WHERE id=${id};`;
  const data = [img_book,title, description , publisher,edition,pages , price,author,id];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};
module.exports = {
  getAllBooks,
  getBooksByCategory,
  deleteBooksByID,
  addNewBooks,
  updateBooksByID
};
