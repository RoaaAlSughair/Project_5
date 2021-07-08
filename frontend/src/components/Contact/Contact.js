import React, { useState } from "react";
import axios from "axios";
import "./contact.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ContactUs() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contact = () => {
    axios
      .post("http://localhost:5000/ContactUs", {
        fullName: fullName,
        email: email,
        message: message,
      })
      .then((response) => {})
      .catch((err) => {
        throw err;
      });
  };

  return (
    <>
      <div className="about">
        <h1> About </h1>
        <ion-icon name="mail-outline">booksworms@yahoo.com</ion-icon>
        <br></br>
        <ion-icon name="call-outline">00962-798-777-222</ion-icon>
        <br></br>
        <ion-icon name="location-outline">
          Jordan-Amman-abdullah ghosha street-abdullah bilding
        </ion-icon>
      </div>
      <div className="input-group mb-3">
        <table>
          <tr>
        
            <td><label>Full Name :</label></td>
            <td><input
          type="text"
          placeholder="full Name here "
          onChange={(e) => {
            setFullName(e.target.value);
          }}
        /></td>
          </tr>
          <tr>
            <td><label>Email :</label></td>
            <td><input
          type="text"
          placeholder="email here "
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        /></td>
          </tr>
          <tr>
            <td><label>Message: </label></td>
            <td><textarea
          rows="3" 
          placeholder="message here "
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        /></td>
          </tr>
        </table>
        
        
        

        <button className="btn-check" type="button" onClick={contact}>
          send
        </button>
      </div>
    </>
  );
}
