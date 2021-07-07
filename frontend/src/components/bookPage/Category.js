import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./bookPage.css";

// export default function Category() {
//         const [category_id, setCategory_id] = useState(0);

//       const getByCategory = () => {
//         axios.get(`http://localhost:5000/${category_id}`).then((res)=>{
//         }).catch((err)=>{
//           console.log(err)
//         })
//       };
//     return (
//         <div className="input-group mb-3" >
//     <input type="Number" placeholder="Category_id here " onChange={(e) => {setCategory_id(e.target.value);}}/>
//       <button className="btn-check"  onClick={getByCategory}>get Book</button>
//         </div>
//     )
// };
export default function Category() {
  const [category_id, setCategory_id] = useState(0);
  return (
    <div>
      <img
        src="https://www.ktaab.com/wp-content/uploads/2015/04/1-31.png"
        category_id="1"
        onClick={(e) => {
          setCategory_id(e.target.category_id);
        }}
      />
      <img
        src="https://www.ktaab.com/wp-content/uploads/2015/04/1-61.png"
        category_id="2"
      />
      <img
        src="https://www.ktaab.com/wp-content/uploads/2015/04/1-71.png"
        category_id="3"
      />
      <img src="" />
      <img src="" />
      <img src="" />
      <img src="" />
      <img src="" />
    </div>
  );
}
