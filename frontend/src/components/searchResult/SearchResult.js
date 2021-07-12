import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SearchBar() {
  const dispatch = useDispatch();

  const state = useSelector(state => state.searchResult.result);

  return (
    <div>
        {state.map((elem, index) => {
          return <div key={index} className="search-result">
            <img
              className=""
              src={elem.book_img}
              alt="غلاف الكتاب"
              style={{ height: "20rem", width: "100%" }}
            />
            <hr />
            <p className="">العنوان: {elem.title}</p>
            <p className="">المؤلف: {elem.author}</p>
            <p className="">الوصف: {elem.description}</p>
            <p className="">السعر: {elem.price}</p>
            <button>Add to favorite</button>
            <button>Buy now</button>
          </div>
        })}
    </div>
  );
}
