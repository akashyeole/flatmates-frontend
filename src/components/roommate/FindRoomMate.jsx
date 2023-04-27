import React, { useState } from 'react';
import RoomMateCard from './RoomMateCard';
import './FindRoomMate.css';
import tempImg from '../../images/housenotfound.png';

// Find a Room page
const FindRoomMate = () => {
  const [rooms, setRooms] = useState([]);
  const [newRoom, setNewRoom] = useState({ build_name: '', room_n: '', addr_1:'', addr_2:'', price: '', image: tempImg });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setRooms(prevRooms => [...prevRooms, newRoom]);
    setNewRoom({ build_name: '', room_n: '', addr_1:'', addr_2:'', price: '', image: tempImg });
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
      <h1 style={{ color: 'rgb(41, 102, 215)', padding: '10px', justifyContent: 'center', flex: 1 }}>
        Please Enter Available Room
      </h1>
      <div className="add-room-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="build_name"
            value={newRoom.build_name}
            onChange={handleChange}
            placeholder="Building Name"
          />
          <input
            type="text"
            name="room_n"
            value={newRoom.room_n}
            onChange={handleChange}
            placeholder="Room Number"
          />
          <input
            type="text"
            name="addr_1"
            value={newRoom.addr_1}
            onChange={handleChange}
            placeholder="Address Line 1"
          />
          <input
            type="text"
            name="addr_2"
            value={newRoom.addr_2}
            onChange={handleChange}
            placeholder="Address Line 1"
          />
          <input
            type="text"
            name="price"
            value={newRoom.price}
            onChange={handleChange}
            placeholder="Price"
          />
          <button className="remove-button" type="submit">Add Room</button>
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
