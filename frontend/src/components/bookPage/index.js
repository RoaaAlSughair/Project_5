import React from "react";
import AddBookPage from "./AddBook";
import EditBookPage from "./EditBook";
import DeleteBookPage from "./deleteBook";
import Category from "./Category";
import "./bookPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link, Route } from "react-router-dom";

function BookPage(role, token) {
  return (
    <div className="bookPage">
      <>
      <button className="admin-button"><Link
          to="/AddBook"
          className="linkN"
          style={{ textDecoration: "none" }}
        >
          <div className="link">Add Book</div>
        </Link></button>
        <button className="admin-button"><Link
          to="/EditBook"
          className="linkN"
          style={{ textDecoration: "none" }}
        >
          <div className="link">Edit Book</div>
        </Link></button>
        <button className="admin-button"><Link
          to="/DeleteBook"
          className="linkN"
          style={{ textDecoration: "none" }}
        >
          <div className="link">Delete Book</div>
        </Link></button>
        <button className="admin-button"><Link
          to="/category_id"
          className="linkN"
          style={{ textDecoration: "none" }}
        >
          <div className="link">get Book by category</div>
        </Link></button>
     
        
        
      </>

      <Route exact path="/AddBook" component={AddBookPage} />
      <Route exact path="/EditBook" component={EditBookPage} />
      <Route exact path="/DeleteBook" component={DeleteBookPage} />
      <Route exact path="/category_id" component={Category} />
    </div>
  );
}

export default BookPage;
