import React,{useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function EditBookPage() {
  const [book_id, setBook_id] = useState(0);
  const [book_img, setBook_img] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [publisher, setPublisher] = useState("");
  const [edition, setEdition] = useState("");
  const [pages, setPages] = useState("");
  const [price, setPrice] = useState("");
  const [author, setAuthor] = useState("");

  const EditBook = () => {
    axios.put(`http://localhost:5000/book/${book_id}`, {
      book_img: book_img,
      title: title,
      description: description,
      publisher: publisher,
      edition: edition,
      pages: pages,
      price: price,
      author: author,
    });
  };

  return (
    <div className="bookPage">
      <input type="Number" placeholder="book_id here " onChange={(e) => {setBook_id(e.target.value);}}/>
      <input type="text" placeholder="title here " onChange={(e) => {setTitle(e.target.value);}}/>
      <input type="text" placeholder="description here " onChange={(e) => {setDescription(e.target.value);}}/>
      <input type="text" placeholder="publisher here " onChange={(e) => {setPublisher(e.target.value);}}/>
      <input type="text" placeholder="edition here " onChange={(e) => {setEdition(e.target.value);}}/>
      <input type="Number" placeholder="pages here " onChange={(e) => {setPages(e.target.value);}}/>
      <input type="Number" placeholder="price here " onChange={(e) => {setPrice(e.target.value);}}/>
      <input type="text" placeholder="author here " onChange={(e) => {setAuthor(e.target.value);}}/>
      <button onClick={EditBook}>Edit Book</button>
    </div>
  );
}

export default EditBookPage;
