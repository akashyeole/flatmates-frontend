import './App.css';
// import { useEffect, useState } from 'react';
import { Home, Room, FindRoomMate, Signup, LandingPage, Login, EditProfile } from './components';
import { Route, Routes, Navigate } from 'react-router-dom';
import Nav from './components/navbar/Nav';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/editprofile" element={ <EditProfile />} />
        <Route path="/home" element={<Home /> } />
        <Route path="/findroom" element={<Room /> } />
        <Route path="/findroommate" element={<FindRoomMate />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
