import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const auth = localStorage.getItem("user");
  useEffect(() => {
    if (auth) {
      navigate("/home");
    }
  }, []);
  
  const handleLogin = async () => {
    // console.log(email, password);
    if(email.length == 0 || password.length == 0) return;
    let result = await fetch("http://localhost:4000/api/routes/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    // console.log(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/home");
    } else {
      alert("please enter correct details!");
    }
  };

  return (
    <div className="login-bg">
      <form className="login">
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
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
