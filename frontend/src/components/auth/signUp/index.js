import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

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
      <input
        type="text"
        placeholder="please enter first name"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="please enter last name"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />

      <input
        type="email"
        placeholder="please enter your email "
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="please enter your password "
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={register}>Sign Up</button>
    </>
  );
};

export default SignUp;
