import React, { useEffect } from 'react';
import './Homepage.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  useEffect(()=>{
    if(auth == null) navigate("/");
  })
  
  return(
    <div className='container p-5 d-flex gap-4 parent-container'>
      <div className="card border-primary mb-3 rounded-4">
        <div className="card-body text-primary ">
          <p className="card-text">Need a flat or a room? Tired of searching around the city? Find one now!</p>
        </div>
      <div className="card-header" onClick={() => navigate('/findroom')}>Find a room</div>
      </div>
      <div className="card border-primary mb-3 rounded-4">
        <div className="card-body text-primary">
          <p className="card-text" >Already have a room and want to share? Find someone and split the expenses now!</p>
        </div>
        <div className="card-header" onClick={() => navigate('/findroommate')}>Find a room-mate</div>
      </div>
    </div>
  );
}

export default Home;
  