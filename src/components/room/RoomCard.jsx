import React from 'react';
import './RoomCard.css';

const RoomCard = ({ room, onRoomClick }) => {
  const { id, build_name, room_n, addr_1, addr_2, price, image } = room;

  const handleRoomClick = () => {
    onRoomClick(id);
  };

  return (
    <div className="room-card rounded-3">
      <img src={image} alt={build_name} />
      <h2>{build_name}</h2>
      <p>{room_n}</p>
      <p>{addr_1}</p>
      <p>{addr_2}</p>
      <p>{price}</p>
      <button className="room-button" onClick={handleRoomClick}>
        View Details
      </button>
    </div>
  );
};

export default RoomCard;
