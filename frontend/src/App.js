import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import Main from "./components/main/index";
import Navigation from "./components/navigation/index";
import Footer from "./components/footer/index";
import BookPage from "./components/bookPage/index";
import "./App.css";

const App = () => {
  const [token, setToken] = useState("");
  return (
    <div className="App">
      <Navigation />
      <Main />
      <Footer />
      {token ? (
        <Link
          to="/book_page"
          className="Book_page"
          style={{ textDecoration: "none" }}
        >
          <Route path="/book_page" render={() => <BookPage />} />
        </Link>
      ) : null}
    </div>
  );
};

export default App;
