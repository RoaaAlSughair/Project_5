const connection = require("./../../db/db");

const getAllCategory = (req, res) => {
  const query = `SELECT * FROM categories;`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.status(201).json(results);
  });
};

const addNewCategory = (req, res) => {
  const { category } = req.body;

  const query = `INSERT INTO categories (category) VALUES (?);`;

  const data = [category];
  connection.query(query, data, (err, results) => {
    if (err) {
      throw err;
    }

    res.json(results);
  });
};

const updateCategory = (req, res) => {
  const category_id = req.params.category_id;
  const { category } = req.body;

  const query = `UPDATE categories SET category = ? WHERE category_id = ${category_id};`;
  const data = [category];

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

module.exports = {
  getAllCategory,
  addNewCategory,
  updateCategory,
  deleteCategory,
};
