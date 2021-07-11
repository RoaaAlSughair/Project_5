import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function EditCategory() {
  const [category_id, setCategory_id] = useState(0);
  const [category, setCategory] = useState();
  const state = useSelector((state) => {
    // specify which state to subscribe to (state tree => reducer => state name )
    return {
      token: state.login.token,
    };
  });
  const EditCategories = () => {
    axios.put(
      `http://localhost:5000/category/${category_id}`,
      {
        category: category,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  };

  return (
    <div className="input-group mb-3">
      <input
        type="Number"
        placeholder="category_id here "
        onChange={(e) => {
          setCategory_id(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="category here "
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />

      <button className="btn-check" onClick={EditCategories}>
        Edit Category
      </button>
    </div>
  );
}

export default EditCategory;
