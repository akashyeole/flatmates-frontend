import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

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
      <h1>Flatmates Finder</h1>
      <h3>
        This is the service for finding roommates or rooms in the new city
      </h3>
      <div className="landing-page-buttons">
        <button onClick={handleRegister}><Link className="landingPageButtonsLinks" to="/signup">Register</Link></button>
        <button onClick={handleLogin}><><Link className="landingPageButtonsLinks" to="/login">Login</Link></></button>
      </div>
    </div>

  );
}
