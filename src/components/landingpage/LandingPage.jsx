import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
        navigate('/home');
    }
  })

  const handleRegister = () => {
    navigate('/signup');
  };
  
  const handleLogin = () => {
      navigate('/login');
  };

  return (
    <div className="landing-page">
      <br />
      <br />
      <br />
      <h1>Find your "LIKE-MINDED" Flatmate</h1>
      <div className="landing-page-buttons">
        <button onClick={handleRegister}>Register</button>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>

  );
}
