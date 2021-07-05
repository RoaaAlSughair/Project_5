import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./signUp.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();
  const register = () => {
    axios
      .post("http://localhost:5000/Register", {
        firstName,
        lastName,
        email,
        password,
      })
      .then((result) => {
        history.push("/login");
      })
      .catch((err) => {
        setMessage(err.response.data);
      });
  };
  return (
    <>
      <table className="table1">
        <tr>
          <th>first name</th>
          <th>
            <input
              type="text"
              placeholder="please enter first name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </th>
        </tr>
        <tr>
          <th>last name</th>
          <th>
            {" "}
            <input
              type="text"
              placeholder="please enter last name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </th>
        </tr>
        <tr>
          <th>email</th>
          <th>
            <input
              type="email"
              placeholder="please enter your email "
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </th>
        </tr>
        <tr>
          <th>password</th>
          <th>
            <input
              type="password"
              placeholder="please enter your password "
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </th>
        </tr>
        <tr>
          <th></th>
          <th><button onClick={register}>Sign Up</button></th>
        </tr>
      </table>

      
    </>
  );
};

export default SignUp;
