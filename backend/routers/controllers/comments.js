const connection = require("../../db/db");

const Comments = (req, res) => {
  const { comment, book_id, commenter_id } = req.body;

  const data = [comment, book_id, commenter_id];
  const query = `INSERT INTO comments (comment ,book_id,commenter_id) VALUES (?, ?, ?)`;
  connection.query(query, data, (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json("Added successfully");
  });
};

const UpdateComments = (req, res) => {
  const id = req.params.comment_id;
  const { comment, book_id, commenter_id } = req.body;

  const data = [comment, book_id, commenter_id];
  const query = `UPDATE comments SET comment=?, book_id=?, commenter_id=? WHERE comment_id = ${id};`;
  connection.query(query, data, (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json("Update successfully");
  });
};

const DeleteComment = (req, res) => {
  const id = req.params.comment_id;
  const query = `DELETE FROM comments WHERE comment_id = ${id};`;
  connection.query(query, (err, result) => {
    if (err) {
      throw err;
    }

    res.json(result);
  });
};
module.exports = { Comments, UpdateComments, DeleteComment };
