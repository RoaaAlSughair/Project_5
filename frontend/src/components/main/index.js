import React, { useEffect } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "../../reducers/main";
import "./main.css";

const Main = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      books: state.main.books,
    };
  });

  useEffect(() => {
    Axios.get("http://localhost:5000/book/")
      .then((res) => {
        dispatch(setBooks(res.data));
      })
      .catch((err) => {
        throw err;
      });
  });

  return (
    <div className="Main">
      {state.books.map((elem, index) => {
        return (
          <div key={index} className="book">
            <img className="book_element" src={elem.book_img} alt="Book cover"/>
            <p className="book_element">{elem.title}</p>
            <p className="book_element">{elem.description}</p>
            <p className="book_element">{elem.author}</p>
            <p className="book_element">{elem.price}</p>
            {/* <p className="book_element">{elem.ratings}</p> */}
          </div>
        );
      })};
    </div>
  );
};

export default Main;

/*
Add in "./src/reducers/index" :
import main from "../reducers/main" and use it

Add in "./src/App" :
import Main from "./components/main/index" and use it

Add in "./src/index" :
import { Provider } from "react-redux"; and use it (don't forget to delete "import { BrowserRouter as Router } from 'react-router-dom';")
import store from "./reducers/index"; and use it
*/