import React, { useState } from 'react';
import RoomMateCard from './RoomMateCard';
import './FindRoomMate.css';
import tempImg from '../../images/housenotfound.png';

// Find a Room page
const FindRoomMate = () => {
  const [rooms, setRooms] = useState([]);
  const [newRoom, setNewRoom] = useState({ build_name: '', room_n: '', addr_1:'', addr_2:'', price: '', occupancy: undefined, image: tempImg });
  const [isRoomAdded, setIsRoomAdded] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (rooms.length === 0) {
      setRooms(prevRooms => [...prevRooms, newRoom]);
      setIsRoomAdded(true);
    } else {
      setIsRoomAdded(false);
    }
    setNewRoom({ build_name: '', room_n: '', addr_1:'', addr_2:'', price: '', occupancy: 1, image: tempImg });
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
    setIsRoomAdded(false);
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
            required
          />
          <input
            type="text"
            name="room_n"
            value={newRoom.room_n}
            onChange={handleChange}
            placeholder="Room Number"
            required
          />
          <input
            type="text"
            name="addr_1"
            value={newRoom.addr_1}
            onChange={handleChange}
            placeholder="Address Line 1"
            required
          />
          <input
            type="text"
            name="addr_2"
            value={newRoom.addr_2}
            onChange={handleChange}
            placeholder="Address Line 1"
            required
          />
          <input
            type="number"
            name="occupancy"
            value={newRoom.occupancy}
            onChange={handleChange}
            placeholder="Occupancy"
            required
          />
          <input
            type="text"
            name="price"
            value={newRoom.price}
            onChange={handleChange}
            placeholder="Price"
            required
          />
          <button className="remove-button" type="submit">Add Room</button>
        </form>
        {isRoomAdded && (
          <p style={{ color: 'green', textAlign: 'center' }}>Room added successfully!</p>
        )}
        {!isRoomAdded && rooms.length > 0 && (
          <p style={{ color: 'red', textAlign: 'center' }}>Sorry, only one room can be added per user.</p>
        )}
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
