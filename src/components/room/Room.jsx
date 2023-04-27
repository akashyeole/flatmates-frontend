import React, { useState } from 'react';
import RoomCard from './RoomCard';
import './Room.css';
import tempImg from '../../images/housenotfound.png';

// Find a Room page
const Room = () => {
  const [rooms, setRooms] = useState([
    {
      id: 1,
      title: 'Room 1',
      location: 'Location 1',
      price: 'Rs.1000/month',
      image: tempImg,
    },
    {
      id: 2,
      title: 'Room 2',
      location: 'Location 2',
      price: 'Rs.900/month',
      image: tempImg,
    },
  ]);

  // Handle room click
  const handleRoomClick = (roomId) => {
    const room = rooms.find(room => room.id === roomId);
    const windowFeatures = 'menubar=no,location=no,resizable=yes,scrollbars=yes,status=yes';
    const roomWindow = window.open('', '_blank', windowFeatures);
    roomWindow.document.write(`
      <html>
        <head>
          <title>${room.title}</title>
        </head>
        <body>
        <img src="${room.image}" alt="${room.title}" />
          <h2>${room.title}</h2>
          <p>Location: ${room.location}</p>
          <p>Price: ${room.price}</p>
        </body>
      </html>
    `);
    roomWindow.document.close();
  };

  return (
    <div className="find-a-room-page">
      <h1
        style={{
          color: 'white',
          padding: '10px',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        Find a Room
      </h1>
      <div className="room-listings">
        {rooms.map(room => (
          <RoomCard
            key={room.id}
            room={room}
            onRoomClick={handleRoomClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Room;
