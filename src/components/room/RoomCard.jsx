import React from 'react';
import './RoomCard.css';

const RoomCard = ({ room, onRoomClick }) => {
  const { id, title, location, price, image } = room;

  const handleRoomClick = () => {
    onRoomClick(id);
  };

  return (
    <div className="room-card rounded-3">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{location}</p>
      <p>{price}</p>
      <button className="room-button" onClick={handleRoomClick}>
        View Details
      </button>
    </div>
  );
};

export default RoomCard;
