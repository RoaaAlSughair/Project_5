import React,{useState} from 'react';
import axios from "axios";


export default function Category() {
        const [category_id, setCategory_id] = useState(0);
    
      const getByCategory = () => {
        axios.get(`http://localhost:5000/${category_id}`).then((res)=>{
        }).catch((err)=>{
          console.log(err)
        })
      };
    return (
        <div>
    <input type="Number" placeholder="Category_id here " onChange={(e) => {setCategory_id(e.target.value);}}/>
      <button onClick={getByCategory}>get Book</button>
        </div>
    )
};
