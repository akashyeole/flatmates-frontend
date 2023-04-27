import './App.css';
// import { Home }from './components/homepage/Home';
import { Home, Room, FindRoomMate, Signup, LandingPage, Login } from './components';
import { Route, Routes, Navigate } from 'react-router-dom';
import Nav from './components/navbar/Nav';

// const Room = () =>{
//   return(
//     <div>
//       <h1>heello</h1>
//     </div>
//   )
// }
function App() {
  return (
    <>
    <Nav />
    <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/findroom" element={<Room/>} />
        <Route path="/findroommate" element={<FindRoomMate/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </>
  );
}

export default App;
