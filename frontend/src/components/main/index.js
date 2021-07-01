import React from "react";
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
    Axios.get("http://localhost:5000/books/")
      .then((res) => {
        dispatch(setBooks(res.data));
		res.data.map((elem, index) => {
			return <div key={index} className="book">
				{/* <img className="book_element" src={elem.book_img} alt="An image of a book cover"/> */}
				<p className="book_element">{elem.title}</p>
				<p className="book_element">{elem.description}</p>
				<p className="book_element">{elem.author}</p>
				{/* <p className="book_element">{elem.ratings}</p> */}
			</div>
		})
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return <div className="Main"></div>;
};

export default Main;
