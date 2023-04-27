import React, { useState } from 'react';
import RoomMateCard from './RoomMateCard';
import './FindRoomMate.css';
import tempImg from '../../images/housenotfound.png';

// Find a Room page
const FindRoomMate = () => {
  const [rooms, setRooms] = useState([]);
  const [newRoom, setNewRoom] = useState({ title: '', location: '', price: '', image: tempImg });

  const handleSubmit = (e) => {
    e.preventDefault();
    setRooms(prevRooms => [...prevRooms, newRoom]);
    setNewRoom({ title: '', location: '', price: '', image: tempImg });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRoom(prevRoom => ({ ...prevRoom, [name]: value }));
  };

  const handleRoomClick = (roomId) => {
    // Code for handling room click
  };

  // Handle remove click
  const handleRemoveClick = (roomId) => {
    setRooms(prevRooms => prevRooms.filter(room => room.id !== roomId));
  };

  return (
    <div className="find-a-room-page">
      <h1 style={{ color: 'white', padding: '10px', justifyContent: 'center', flex: 1 }}>
        Please Enter Available Room
      </h1>
      <div className="add-room-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={newRoom.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <input
            type="text"
            name="location"
            value={newRoom.location}
            onChange={handleChange}
            placeholder="Location"
          />
          <input
            type="text"
            name="price"
            value={newRoom.price}
            onChange={handleChange}
            placeholder="Price"
          />
          <button type="submit">Add Room</button>
        </form>
      </div>
      <div className="room-listings">
        {rooms.map(room => (
          <RoomMateCard
            key={room.id}
            room={room}
            onRoomClick={handleRoomClick}
            onRemoveClick={handleRemoveClick}
          />
        ))}
      </div>
    </div>
  );
};

export default FindRoomMate;
