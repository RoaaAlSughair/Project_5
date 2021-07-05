import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./bookPage.css"; 

const DeleteBookPage = () => {
    const [book_id, setBook_id] = useState(0);

  const deleteBook = () => {
    axios.delete(`http://localhost:5000/book/${book_id}`).then((res)=>{
    }).catch((err)=>{
      console.log(err)
    })
  };

  return (
    <div className="input-group mb-3">
          <input type="Number" placeholder="book_id here " onChange={(e) => {setBook_id(e.target.value);}}/>
      <button className="btn-check" onClick={deleteBook}>Delete Book</button>
    </div>
  );
};

export default DeleteBookPage;
