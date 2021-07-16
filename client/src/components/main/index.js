import React from "react";
import "./main.css";
import { Route } from "react-router-dom";
import Navigation from "../navigation/index";
import Login from "./../auth/login/index";
import SignUp from "./../auth/signUp/index";
import HomePage from "../homePage/index";
import Contact from "../Contact/Contact";
import Admin from "../adminPage/Admin";
import AddBookPage from "../bookPage/AddBook";
import EditBookPage from "../bookPage/EditBook";
import DeleteBookPage from "../bookPage/deleteBook";
import AddCategory from "../Category/AddCategory";
import EditCategory from "../Category/EditCategory";
import DeleteCategory from "../Category/DeleteCategory";
import Category from "../bookPage/Category";
import SearchResult from "../searchResult/SearchResult";
import "bootstrap/dist/css/bootstrap.min.css";
import Author from "../bookPage/Author";


const Main = () => {
  return (
    <>
      <Navigation />
      <div className="Main">
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/Register" render={() => <SignUp />} />
        <Route exact path="/home" render={() => <HomePage />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route exact path="/admin" render={() => <Admin />} />
        <Route exact path="/AddBook" render={() => <AddBookPage />} />
        <Route exact path="/EditBook" render={() => <EditBookPage />} />
        <Route exact path="/DeleteBook" render={() => <DeleteBookPage />} />
        <Route exact path="/Category" render={() => <Category />} />
        <Route exact path="/AddCategory" render={() => <AddCategory />} />
        <Route exact path="/EditCategory" render={() => <EditCategory />} />
        <Route exact path="/DeleteCategory" render={() => <DeleteCategory />} />
        <Route exact path="/authors" render={() => <Author />} />
        <Route exact path="/result" render={() => <SearchResult />} />
        {/* <Route exact path="/logout" render={() => <Logout />} /> */}

        {/* <Route exact path="/Register" render={() => <Category />} /> 
        <Route exact path="/Register" render={() => <Authors />} />  */}
      </div>
    </>
  );
};

export default Main;
