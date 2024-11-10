import React from 'react';
import './RoomCard.css';
import Map from '../map/Map';

const RoomCard = ({ room, onRoomClick }) => {
  // Destructure the properties of the `room` object
  const { id, buildName, rent, addressLine1, addressLine2} = room;

  // Function to handle the "View Details" button click
  const handleViewDetailsClick = () => {
    onRoomClick(id);
  };

  return (
    <div className="room-card card rounded-3 m-2">
    {/* <img src={tmp} class="card-img-top" alt={tmp}/> */}
    <div  style={{height: "200px", width: "100%"}}><Map address = {buildName+addressLine1+addressLine2}/></div>
    <div className="card-body">
      <h4 className="card-title">{buildName}</h4>
      Location: {addressLine2}
      <br/>
      Rent: ₹{rent}
    </div>
    <div className="card-footer room-card-button rounded-3" onClick={handleViewDetailsClick}>
    View Details
    </div>
  </div>

  );
};

export default RoomCard;
