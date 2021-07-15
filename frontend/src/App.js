import React, { useState } from "react";
import Main from "./components/main/index";
import Footer from "./components/footer/index";


const App = () => {
  const [token, setToken] = useState("");
  return (
    <div className="App">
      <Main />
      <Footer />
    </div>
  );
};

export default App;
