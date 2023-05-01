import './App.css';
import { useState } from 'react';
import { Home, Room, FindRoomMate, Signup, LandingPage, Login, EditProfile } from './components';
import { Route, Routes, Navigate } from 'react-router-dom';
import Nav from './components/navbar/Nav';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // set initial value to false

  // function to check if user is logged in
  const checkAuth = () => {
    if (isLoggedIn) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
        {/* Protected routes */}
        <Route path="/editprofile" element={checkAuth() ? <EditProfile /> : <Navigate to="/login" />} />
        <Route path="/home" element={checkAuth() ? <Home /> : <Navigate to="/login" />} />
        <Route path="/findroom" element={checkAuth() ? <Room /> : <Navigate to="/login" />} />
        <Route path="/findroommate" element={checkAuth() ? <FindRoomMate /> : <Navigate to="/login" />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
