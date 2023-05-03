import React, { useState } from 'react';
import './RoomCard.css';
import tmp from '../../images/housenotfound.png'
import Map from '../map/Map';

const RoomCard = ({ room, onRoomClick }) => {
  // Destructure the properties of the `room` object
  const { id, buildName, roomNumber, rent, addressLine1, addressLine2} = room;

  // Use the `useState` hook to manage the `showDetails` state
  const [showDetails, setShowDetails] = useState(false);

  // Function to handle the "View Details" button click
  const handleViewDetailsClick = () => {
    setShowDetails(true);
    onRoomClick(id);
  };

  // Function to handle the "Close" button click in the modal
  const handleCloseModalClick = () => {
    setShowDetails(false);
  };

  return (
    <div class="room-card card rounded-3 m-2">
    {/* <img src={tmp} class="card-img-top" alt={tmp}/> */}
    <div  style={{height: "200px", width: "100%"}}><Map address = {buildName+addressLine1+addressLine2}/></div>
    <div class="card-body">
      <h4 class="card-title">{buildName}</h4>
      Location: {addressLine2}
      <br/>
      Rent: ₹{rent}
    </div>
    <div class="card-footer room-card-button rounded-3" onClick={handleViewDetailsClick}>
    View Details
    </div>
  </div>

  );
};

export default RoomCard;
