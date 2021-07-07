import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setComments,
  createComment,
  updateComment,
  deleteComment,
} from "./../reducers/comments.js";

const CommentsList = () => {
  const [comment, setComment] = useState("");
  const [book_id, setBook_id] = useState("");
  const [commenter_id, setCommenter_id] = useState("");
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      comments: state.comments.comments,
    };
  });

  const create_Comment = () => {
    axios
      .post(`http://localhost:5000/Comments`, {
        book_id,
        commenter_id,
        comment,
      })
      .then((res) => {
        dispatch(createComment(res.data));
      })
      .catch((err) => {
        throw err;
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/Comments`)
      .then((res) => {
        dispatch(setComments(res.data));
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const update_Comment = () => {
    axios
      .put(`http://localhost:5000/Comments`, {
        book_id,
        commenter_id,
        comment,
      })
      .then((res) => {
        dispatch(updateComment(res.data));
      })
      .catch((err) => {
        throw err;
      });
  };

  const delete_Comment = () => {
    axios
      .delete(`http://localhost:5000/Comments`)
      .then((res) => {
        dispatch(deleteComment(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1> Welcome </h1>
      <input
        type="text"
        onChange={(e) => {
          setComments(e.target.value);
        }}
      />

      <button onClick={create_Comment}> Add </button>
      <input
        type="text"
        onChange={(e) => {
          updateComment(e.target.value);
        }}
      />
      <button onClick={update_Comment}> update </button>

      <input
        type="text"
        onChange={(e) => {
          deleteComment(e.target.value);
        }}
      />
      <button onClick={delete_Comment}> delete </button>
      <ul>
        {state.comments.map((comment) => {
          return <li>{comment.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default CommentsList;
