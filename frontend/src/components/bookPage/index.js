import React from "react";
import AddBookPage from "./AddBook";
import EditBookPage from "./EditBook";
import DeleteBookPage from "./deleteBook";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link, Route } from "react-router-dom";

function BookPage(role, token) {
  return (
    <div className="bookPage">
      <>
      <button><Link
          to="/AddBook"
          className="linkN"
          style={{ textDecoration: "none" }}
        >
          <div className="link">Add Book</div>
        </Link></button>
        <button><Link
          to="/EditBook"
          className="linkN"
          style={{ textDecoration: "none" }}
        >
          <div className="link">Edit Book</div>
        </Link></button>
        <button><Link
          to="/DeleteBook"
          className="linkN"
          style={{ textDecoration: "none" }}
        >
          <div className="link">Delete Book</div>
        </Link></button>
      </>

      <Route exact path="/AddBook" component={AddBookPage} />
      <Route exact path="/EditBook" component={EditBookPage} />
      <Route exact path="/DeleteBook" component={DeleteBookPage} />
    </div>
  );
}

export default BookPage;
