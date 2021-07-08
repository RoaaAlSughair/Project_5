import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./bookPage.css";

export default function Category() {
  const [category_id, setCategory_id] = useState(4);
  const [data, setData] = useState([]);
  const register = (x) => {
    axios
      .get(`http://localhost:5000/book/Category/${x}`)
      .then((result) => {
        // console.log(result.data);
        setData(result.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  console.log(data);
  return (
    <>
      <div>
        <img
          src="https://www.ktaab.com/wp-content/uploads/2015/04/1-31.png"
          onClick={() => {
            register(1);
          }}
        />
        <img
          src="https://www.ktaab.com/wp-content/uploads/2015/04/1-61.png"
          onClick={() => {
            register(2);
          }}
        />

        <img
          src="https://www.ktaab.com/wp-content/uploads/2015/04/1-71.png"
          onClick={() => {
            register(3);
          }}
        />
        <img
          src="https://www.ktaab.com/wp-content/uploads/2015/04/1-41.png"
          onClick={() => {
            register(4);
          }}
        />
        <img
          src="https://www.ktaab.com/wp-content/uploads/2015/04/11.png"
          onClick={() => {
            register(5);
          }}
        />
        <img
          src="https://www.ktaab.com/wp-content/uploads/2015/04/1-91.png"
          onClick={() => {
            register(6);
          }}
        />
        <img
          src="https://www.ktaab.com/wp-content/uploads/2015/04/1-12.png"
          onClick={() => {
            register(7);
          }}
        />
        <img
          src="https://www.ktaab.com/wp-content/uploads/2015/04/%D8%B3%D8%A7%D8%AE%D8%B1.png"
          onClick={() => {
            register(8);
          }}
        />
        <img
          src="https://www.ktaab.com/wp-content/uploads/2015/04/deen.png"
          onClick={() => {
            register(9);
          }}
        />
      </div>

      {data.map((elem, index) => {
        return (
          <div key={index} book_id={elem.book_id} className="book">
            <img
              className="book_image"
              src={elem.book_img}
              alt="غلاف الكتاب"
              style={{ height: "20rem", width: "100%" }}
            />
            <hr />
            <p className="book_element">العنوان: {elem.title}</p>
            <p className="book_element">المؤلف: {elem.author}</p>
            <p className="book_element">السعر: {elem.price}</p>
            {/* <ReactStars
              count={5}
              onClick={ratingChanged}
              size={24}
              activeColor="#ffd700"
              isHalf={true}
            /> */}
          </div>
        );
      })}
    </>
  );
}
