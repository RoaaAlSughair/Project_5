const connection = require("./../../db/db");

const getAllBooks = (req, res) => {
  const query = `SELECT * FROM book`;

  connection.query(query, (err, result) => {
    if (err) throw err;
    
    res.status(201).json(result);
  });
};

const getBookByTitle = (req, res) => {
  // get the book's title
  const title = req.query.title;

  // inject the title in the query order to get the result
  const data = [title];
  const query = `SELECT * FROM book WHERE title = ?;`;
  connection.query(query, data, (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result);
  });
};

const getBooksByAuthor = (req, res) => {
  // get the author
  const author = req.query.author;

  // inject the author in the query order to get the result
  const data = [author];
  const query = `SELECT * FROM book WHERE author = ?;`;
  connection.query(query, data, (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result);
  });
};

// export functions
module.exports = {
  getAllBooks,
  getBookByTitle,
  getBooksByAuthor,
};
