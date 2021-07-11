import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./bookPage.css";

const DeleteBookPage = () => {
  const [book_id, setBook_id] = useState(0);
  const state = useSelector((state) => {
    // specify which state to subscribe to (state tree => reducer => state name )
    return {
      token: state.login.token,
    };
  });
  const deleteBook = () => {
    axios
      .delete(`http://localhost:5000/book/${book_id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input
        type="Number"
        placeholder="book_id here "
        onChange={(e) => {
          setBook_id(e.target.value);
        }}
      />
      <button onClick={deleteBook}>
        Delete Book
      </button>
    </div>
  );
};

export default DeleteBookPage;
