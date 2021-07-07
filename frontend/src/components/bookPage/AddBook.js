import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./bookPage.css";

function AddBookPage() {
  const [book_img, setBook_img] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [publisher, setPublisher] = useState("");
  const [edition, setEdition] = useState("");
  const [pages, setPages] = useState("");
  const [price, setPrice] = useState("");
  const [author, setAuthor] = useState("");
  const [success, setSuccess] = useState(undefined);
  const state = useSelector((state) => {
    // specify which state to subscribe to (state tree => reducer => state name )
    return {
      token: state.login.token,
      
    };
  });
  const AddBook = () => {
    axios
      .post("http://localhost:5000/book", {
        book_img: book_img,
        title: title,
        description: description,
        publisher: publisher,
        edition: edition,
        pages: pages,
        price: price,
        author: author,
      },{
        headers:{
          authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then((res) => {
        setSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setSuccess(false);
        throw err;
      });
  };
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        placeholder="URL picture here "
        onChange={(e) => {
          setBook_img(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="title here "
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="description here "
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="publisher here "
        onChange={(e) => {
          setPublisher(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="edition here "
        onChange={(e) => {
          setEdition(e.target.value);
        }}
      />
      <input
        type="Number"
        placeholder="pages here "
        onChange={(e) => {
          setPages(e.target.value);
        }}
      />
      <input
        type="num"
        placeholder="price here "
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="author here "
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
      />

      <button className="btn-check" onClick={AddBook}>
        Add Book
      </button>
    </div>
  );
}

export default AddBookPage;
