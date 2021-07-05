import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken } from "../../../reducers/login";
import { GoogleLogin } from "react-google-login";
import "bootstrap/dist/css/bootstrap.min.css";
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
        localStorage.setItem("token",result.data.token)
        history.push("/book/");
        dispatch(setToken(result.data.token));
      })
      .catch((err) => {
        setMessage(err.response.data);
      });
  };
  const ResponseGoogle = (response) => {
    setToken(response.accessToken);
    localStorage.setItem("token", response.accessToken);
    history.push("/contact");
  };
  // const logOut = () => {
  //   localStorage.clear();
  //   localStorage.setItem()
  // }
  return (
    <div>
      <h1>Login Page</h1>
      <table>
        <tr>
          <td>
            <label>Email</label>
          </td>
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
        <tr></tr>
        <tr>
          <td>
            <label>Password</label>
          </td>
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
        <tr></tr>
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
      <div>
          <GoogleLogin
            clientId="1018427859000-rr1mqigkk7fvghqfnh85ph78eru3lo8m.apps.googleusercontent.com"
            onSuccess={ResponseGoogle}
            onFailure={ResponseGoogle}
          />
        </div>
    </div>
  );
};

export default Login;
