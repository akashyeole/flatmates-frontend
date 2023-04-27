import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/home");
    }
  }, []);

  const handleLogin = async () => {
    console.log(email, password);
    let result = await fetch("http://localhost:4000/api/routes/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/home");
    } else {
      alert("please enter correct details!");
    }
  };

  return (
    <div className="login-bg">
      <div className="login">
        <h1 className="login-title">Login</h1>
        <input
          type="text"
          placeholder="Enter Email"
          className="input-box"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="input-box"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <button type="button" onClick={handleLogin}>
          {" "}
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
