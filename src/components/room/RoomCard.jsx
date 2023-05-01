import React, { useState } from 'react';
import './RoomCard.css';

const RoomCard = ({ room, onRoomClick }) => {
  // Destructure the properties of the `room` object
  const { id, buildName, roomNumber, rent} = room;

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
    <div className="room-card rounded-3">
      <h2>{buildName}</h2>
      <p>Room Number: {roomNumber}</p>
      <p>Rent: ${rent}</p>
      {/* Button that triggers the modal */}
      <button className="room-button" onClick={handleViewDetailsClick}>
        View Details
      </button>
    </div>
  );
};

export default RoomCard;
