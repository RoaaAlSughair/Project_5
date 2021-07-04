import React, { useEffect } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "../../reducers/main";
import "./main.css";
import { Link,Route } from "react-router-dom";
 import Navigation from "../navigation/index";
 import Login from "./../auth/login/index";
 import SignUp from "./../auth/signUp/index";
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
    <>
    <Navigation/>
    <div className="Main">
    <Route exact path="/login" render={() => <Login />} /> 
    <Route exact path="/Register" render={() => <SignUp />} /> 
    {/* <Route exact path="/Register" render={() => <Category />} /> 
    <Route exact path="/Register" render={() => <Authors />} />  */}
      {state.books.map((elem, index) => {
        return (
          
     
          <div key={index} book_id={elem.book_id} className="book"> 
            
            <img className="book_image" src={elem.book_img} alt="Book cover"/>
            <p className="book_element">Title: {elem.title}</p>
            <p className="book_element">Author: {elem.author}</p>
            <p className="book_element">Price: {elem.price}</p>
            {/* <p className="book_element">{elem.ratings}</p> */}
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Main;