import React, { useState, useEffect } from 'react';
import RoomCard from './RoomCard';
import RoomDetail from './RoomDetail';
import './Room.css';

const Room = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch('http://localhost:4000/api/routes/room');
      const data = await response.json();
      setRooms(data);
    };

    fetchRooms();
  }, []);

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
  };

  const handleModalClose = () => {
    setSelectedRoom(null);
  };

  return (
    <div className="find-a-room-page">
      <h1 style={{ color: 'rgb(41, 102, 215)', padding: '10px', justifyContent: 'center', flex: 1 }}>Find a Room</h1>
      <div className="room-listings">
        {rooms.map(room => (
          <RoomCard
            key={room._id}
            room={room}
            onRoomClick={() => handleRoomClick(room)}
          />
        ))}
      </div>
      {selectedRoom && (
        <RoomDetail
          room={selectedRoom}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default Room;
