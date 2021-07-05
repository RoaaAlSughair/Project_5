import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "../../reducers/homePage";
import ReactStars from "react-rating-stars-component";
import Axios from "axios";
import "./homePage.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HomePage() {
  const [stars, setStars] = useState(0);
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      books: state.homePage.books,
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
  const ratingChanged = (e) => {
    setStars(e.target.value) };
  return (
    <div className="home_page">
      {state.books.map((elem, index) => {
        return (
          <div key={index} book_id={elem.book_id} className="book">
            <img
              className="book_image"
              src={elem.book_img}
              alt="Book cover"
              style={{ height: "12rem", width: "12rem" }}
            />
            <p className="book_element">Title: {elem.title}</p>
            <p className="book_element">Author: {elem.author}</p>
            <p className="book_element">Price: {elem.price}</p>
            <ReactStars
              count={5}
              onClick={ratingChanged}
              size={24}
              activeColor="#ffd700"
              isHalf={true}
             

            />
            ,{/* <p className="book_element">{elem.ratings}</p> */}
          </div>
        );
      })}
    </div>
  );
}
