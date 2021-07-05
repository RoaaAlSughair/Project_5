import React,{useState} from "react";
import axios from "axios";
import './footer.css';

export default function ContactUs() {
    const [fullName,setFullName]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');

    const contact = ()=>{
        axios.post('http://localhost:5000/ContactUs',{
          fullName:fullName,
            email:email,
            message:message

        }).then((response)=>{
          // response.json('Added successfully')

        }).catch((err)=>{
          throw err ;
        })

    }


  return (
    <div className="input-group mb-3">
      <input type="text" placeholder="full Name here " onChange={(e) => {setFullName(e.target.value);}}/>
    <input type="text" placeholder="email here " onChange={(e) => {setEmail(e.target.value);}}/>
    <textarea  rows='3' placeholder="message here " onChange={(e) => {setMessage(e.target.value);}}/>

    <button className="btn-check" type='button' onClick={contact}>send</button>
           
    </div>
  );
}