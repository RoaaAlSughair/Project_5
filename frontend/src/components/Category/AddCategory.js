import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function AddCategory() {
  const [category, setCategory] = useState();
  const [success, setSuccess] = useState(undefined);
  const state = useSelector((state) => {
    // specify which state to subscribe to (state tree => reducer => state name )
    return {
      token: state.login.token,
    };
  });
  const AddCategories = () => {
    axios
      .post(
        "http://localhost:5000/category",
        {
          category: category,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
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
        placeholder="category here "
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      <button className="btn-check" onClick={AddCategories}>
        Add Category
      </button>
    </div>
  );
}

export default AddCategory;
