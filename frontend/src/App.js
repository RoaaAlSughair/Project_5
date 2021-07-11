import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import Main from "./components/main/index";
import Navigation from "./components/navigation/index";
import Footer from "./components/footer/index";
import BookPage from "./components/bookPage/index";
import { FloatingWhatsApp } from "react-floating-whatsapp-button";
import "react-floating-whatsapp-button/dist/index.css";
import Login from "./components/auth/login/index";
import Admin from "./components/adminPage/Admin";
const App = () => {
  const [token, setToken] = useState("");
  return (
    <div className="App">
     
      <Main />
      <Footer />
      {/* <BookPage /> */}
      {/* <Link
          to="/bookPage"
          className="BookPage"
          style={{ textDecoration: "none" }}
        >
          <Route path="/book_page" render={() => <BookPage />} />
        </Link> */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
