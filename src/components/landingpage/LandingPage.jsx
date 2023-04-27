import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const handleRegister = () => {
    <Routes>
      <Route path="/signup">Register</Route>
    </Routes>;
  };

  const handleLogin = () => {
    <Routes>
      <Route path="/login">Login</Route>
    </Routes>;
  };

  return (
    <div className="landing-page">
      <br />
      <br />
      <br />
      <h1>Find your "LIKE-MINDED" Flatmate</h1>
      <div className="landing-page-buttons">
        <button onClick={handleRegister}><Link className="landingPageButtonsLinks" to="/signup">Register</Link></button>
        <button onClick={handleLogin}><><Link className="landingPageButtonsLinks" to="/login">Login</Link></></button>
      </div>
    </div>

  );
}
