const connection = require("./../../db/db");

const getAllCategory = (req, res) => {
  const query = `SELECT * FROM categories;`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.status(201).json(results);
  });
};

const addNewCategory = (req, res) => {
  const {
    category
  } = req.body;

  const query = `INSERT INTO categories (category) VALUES (?);`;

  const data = [
    category
  ];
  connection.query(query, data, (err, results) => {
    if (err) {
      throw err;
    }

    res.json(results);
  });
};
const updateCategory = (req, res) => {
  const id = req.params.category_id;
const {
    category
  } = req.body;

  const query = `UPDATE categories SET category =? WHERE category_id = ${id};`;
  const data = [
    category
  ];
  connection.query(query, data, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};


const deleteCategory = (req, res) => {
  const category_id = req.params.category_id;

  const query = `DELETE FROM categories WHERE category_id = ${category_id};`;
  connection.query(query, (err, result) => {
    if (err) {
      throw err;
    }

    res.json(result);
  });
};




// const getBookByTitle = (req, res) => {
//   const title = req.query.title;

//   const data = [title];
//   const query = `SELECT * FROM book WHERE title = ?;`;
//   connection.query(query, data, (err, result) => {
//     if (err) {
//       throw err;
//     }
//     res.status(200).json(result);
//   });
// };

// const getBooksByAuthor = (req, res) => {
//   const author = req.query.author;

//   const data = [author];
//   const query = `SELECT * FROM book WHERE author = ?;`;
//   connection.query(query, data, (err, result) => {
//     if (err) {
//       throw err;
//     }
//     res.status(200).json(result);
//   });
// };

module.exports = {
  getAllCategory,
  addNewCategory,
  updateCategory,
  deleteCategory
//   getBooksByCategory,
//   deleteBooksByID,
//   updateBooksByID,
//   getBookByTitle,
//   getBooksByAuthor,
};
