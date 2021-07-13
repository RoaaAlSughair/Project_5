import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navigation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import jwt from "jsonwebtoken";
// const jwt_decode = require('jwt-decode');
import { HideAt, ShowAt } from "react-hide-show-utils";
const token = localStorage.getItem("token");
const decoded = jwt.decode(token);

console.log("token", token);
// console.log("decoded.role_id", decoded.role_id);


const Navigation = () => {
  const [search, setSearch] = useState("");
  // const state = useSelector((state) => {
  //   return {
  //     token: state.login.token,
  //   };
  // });
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = (e) => {
    if (!search) {
      e.preventDefault();
    } else {
      // How to get all authors' names for comparison?
      // if search value is an author, then search books by author. Otherwise, search book by title
      if (search === "author_name") {
        Axios.get(`http://localhost:5000/book/search_author?author=${search}`)
          .then((res) => {
            // dispatch(searchBook(res.data));
          })
          .catch((err) => {
            throw err;
          });
      } else {
        Axios.get(`http://localhost:5000/book/search_title?title=${search}`)
          .then((res) => {
            // dispatch(searchBook(res.data));
          })
          .catch((err) => {
            throw err;
          });
      }
    }
  };
  // const token1 = localStorage.getItem("token");

  return (
    <div className="NavBar">
      <Link to="/home" className="Link">
        <span
          style={{
            color: "#a24e12",
            fontSize: "2rem",
            fontFamily: "math",
            fontWeight: "bolder",
          }}
        >
          Home
        </span>
      </Link>
      <Link to="/Category" className="Link">
        Category
      </Link>
      <Link to="/authors" className="Link">
        Author
      </Link>
      {/* <Link to="/admin" className="Link">
          Admin Page
        </Link> */}
        
      {token&&decoded.role_id === 1 ?  (
        
        <Link to="/admin" className="Link" style={{display:"inherit"}}>
          Admin Page
        </Link>
      ) : ""}
   
    

      <div className="search">
        <input
          type="text"
          className="searchBar"
          placeholder="Search book"
          onChange={handleChange}
        />
        <button className="button-search" onClick={handleClick}>
          Search
        </button>
      </div>
      <Link to="/contact" className="Link">
        Contact
      </Link>
      <Link to="/login" className="Link">
        Log In
      </Link>
      <Link to="/Register" className="Link">
        Register
      </Link>
      {/* Should search results be displayed in main component? Or should it be redirected into a new page? */}
    </div>
  );
};

export default Navigation;
