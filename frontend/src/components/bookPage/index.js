import React from "react";
import AddBookPage from "./AddBook";
import EditBookPage from "./EditBook";
import DeleteBookPage from "./deleteBook";
import Category from "./Category";

import { Link, Route } from "react-router-dom";

function BookPage(role, token) {
  return (
    <div className="bookPage">
      {token ? (
        <>
          <Link
            to="/AddBook"
            className="linkN"
            style={{ textDecoration: "none" }}
          >
            <div className="link">Add Book</div>
          </Link>
          <Link
            to="/EditBook"
            className="linkN"
            style={{ textDecoration: "none" }}
          >
            <div className="link">Edit Book</div>
          </Link>
          <Link
            to="/DeleteBook"
            className="linkN"
            style={{ textDecoration: "none" }}
          >
            <div className="link">Delete Book</div>
          </Link>
          <Link
            to="/category_id"
            className="linkN"
            style={{ textDecoration: "none" }}
          >
            <div className="link">get Book by category</div>
          </Link>
        </>
      ) : null}
      <Route exact path="/AddBook" component={AddBookPage} />
      <Route exact path="/EditBook" component={EditBookPage} />
      <Route exact path="/DeleteBook" component={DeleteBookPage} />
      <Route exact path="/category_id" component={Category} />

    </div>
  );
}

export default BookPage;
