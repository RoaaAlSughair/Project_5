import React,{useState} from "react";
import axios from "axios";

function AddBookPage() {
const [book_img,setBook_img]=useState();
const [title,setTitle]=useState('');
const [description,setDescription]=useState('');
const [publisher,setPublisher]=useState('');
const [edition,setEdition]=useState('');
const [pages,setPages]=useState('');
const [price,setPrice]=useState('');
const [author,setAuthor]=useState('');
const [success, setSuccess] = useState(undefined);


const AddBook = () => {
axios.post("http://localhost:5000/book/", {
  book_img: book_img,
  title: title,
  description: description,
  publisher: publisher,
  edition: edition,
  pages: pages,
  price: price,
  author: author,
}).then((res)=>{
  setSuccess(true);
}).catch((err)=>{
  setSuccess(false);
  throw err;
})
};
return (
    <div className="bookPage">
      <input type="file" onChange={(e) => {setBook_img(e.target.value);}}    />
      <input type="text" placeholder="title here " onChange={(e) => {setTitle(e.target.value);}}/>
      <input type="text" placeholder="description here " onChange={(e) => {setDescription(e.target.value);}}/>
      <input type="text" placeholder="publisher here " onChange={(e) => {setPublisher(e.target.value);}}/>
      <input type="text" placeholder="edition here " onChange={(e) => {setEdition(e.target.value);}}/>
      <input type="Number" placeholder="pages here " onChange={(e) => {setPages(e.target.value);}}/>
      <input type="Number" placeholder="price here " onChange={(e) => {setPrice(e.target.value);}}/>
      <input type="text" placeholder="author here " onChange={(e) => {setAuthor(e.target.value);}}/>

      <button onClick={AddBook}>Add Book</button>
      
    </div>
  );
}

export default AddBookPage;