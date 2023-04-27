import React from 'react';
import './RoomMateCard.css';

const RoomMateCard = ({ room, onRoomClick, onRemoveClick }) => {
  const { id, title, location, price, image } = room;

  const handleRoomClick = () => {
    onRoomClick(id);
  };

  const handleRemoveClick = () => {
    onRemoveClick(id);
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
      <button className="remove-button" onClick={handleRemoveClick}>
        Remove
      </button>
    </div>
  );
};

export default RoomMateCard;
