import React, { useState } from "react";
import { Link,useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken } from "../../../reducers/login";

import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const signIn = () => {
    axios
      .post("http://localhost:5000/login", { email, password })
      .then((result) => {
        console.log(result);
        history.push("/book/")
        // setMessage("Login Successful");
        dispatch(setToken(result.data.token));
      })
      .catch((err) => {
        setMessage(err.response.data);
      });
  };
  return (
    <div>
      <div>
        <h1>Login Page</h1>
      </div>
      <table>
        <tr>
          <td>
            <label>Email</label>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Password</label>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={signIn}>Login</button>
          </td>
        </tr>
      </table>
      <p>{message}</p>
      <p>
        Sign Up for website <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
