import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    const payload = {
      username: email,
      password: password,
    };

    axios
      .post("https://api.mudoapi.tech/login", payload)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.data.token);
        navigate("/");

        // localStorage.setItem("token", abcdefege);
      })
      .catch((err) => {
        console.log(err.message);
        setErr(err.message);
      });

    //cara panggil api ketika login
  };

  return (
    <>
      <Navbar />
      {!!err.length && <h1 style={{ color: "red" }}>{err}</h1>}
      <div>
        <h1>Login</h1>
        <div>
          <input onChange={handleChangeEmail} placeholder="email" />
          <input onChange={handleChangePass} placeholder="password" />
          <button onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </>
  );
};

export default Login;
