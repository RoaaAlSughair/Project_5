import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setComments,
  createComment,
  updateComment,
  deleteComment,
} from "./../../reducers/comments";

const CommentsList = () => {
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      comments: state.comments.comments,
    };
  });

  const createComment = () => {
    axios
      .post(`http://localhost:3000/comments`, { comment })
      .then((res) => {
        dispatch(createComment(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/comments`)
      .then((res) => {
        dispatch(setComments(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1> Welcome {state.user.name} </h1>
      <input
        type="text"
        onChange={(e) => {
          setComments(e.target.value);
        }}
      />

      <button onClick={createComment}> Add </button>

      <ul>
        {state.comments.map((comment) => {
          return <li>{comment.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default CommentsList;
