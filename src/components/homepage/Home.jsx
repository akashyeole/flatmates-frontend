import React from 'react';
import './Homepage.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleFindRoomClick = () => {
    navigate('/findroom');
  };
  const handleFindRoomMateClick = () => {
    navigate('/findroommate');
  };
  return (
    <div className="parent-container d-flex flex-column justify-content-center align-items-center">
      <div className="home-container d-flex flex-column flex-md-row justify-content-center align-items-center rounded-3 p-5">
        <div className="findroom-container">
          <p className="title">Need a room/hostel? Tired of searching around the city? Find one near your college now!</p>
          <button className="sub-title transparent-btn" onClick={handleFindRoomClick}>Find A Room</button>
        </div>
        <div className="vertical-divide rounded-4"></div>
        <div className="findmate-container">
          <p className="title">Already have a room and want to share? Find someone and split the expenses now!</p>
          <button className="sub-title transparent-btn" onClick={handleFindRoomMateClick}>Find A Room-Mate</button>
        </div>
      </div>
    </div>
  )
}

export default Home;
  