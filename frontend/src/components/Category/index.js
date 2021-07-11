import React from "react";
import AddCategory from "./AddCategory";
import EditCategory from "./EditCategory";
import DeleteCategory from "./DeleteCategory";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link, Route } from "react-router-dom";

function CategoryPage(role, token) {
  return (
    <div>
      <>
        <button>
          <Link to="/AddCategory" style={{ textDecoration: "none" }}>
            <div>Add Category</div>
          </Link>
        </button>
        <button>
          <Link to="/EditCategory" style={{ textDecoration: "none" }}>
            <div>Edit Category</div>
          </Link>
        </button>
        <button>
          <Link to="/DeleteCategory" style={{ textDecoration: "none" }}>
            <div>Delete Category</div>
          </Link>
        </button>
      </>

      <Route exact path="/AddCategory" component={AddCategory} />
      <Route exact path="/EditCategory" component={EditCategory} />
      <Route exact path="/DeleteCategory" component={DeleteCategory} />
    </div>
  );
}

export default CategoryPage;
