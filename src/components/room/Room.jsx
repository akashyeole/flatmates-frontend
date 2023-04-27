import React, { useState } from 'react';
import RoomCard from './RoomCard';
import './Room.css';
import tempImg from '../../images/housenotfound.png';

// Find a Room page
const Room = () => {
  const [rooms, setRooms] = useState([
    {
      id: 1,
      build_name : 'Shewanta',
      room_n : 78,
      addr_1 : 'bl 50', 
      addr_2 : 'Nashik',
      price: 'Rs.1000/month',
      image: tempImg,
    },
    {
      id: 2,
      build_name : 'Suflam',
      room_n : 6,
      addr_1 : 'bl 9', 
      addr_2 : 'Pune',
      price: 'Rs.1000/month',
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
          <title>${room.build_name}</title>
        </head>
        <body>
        <img src="${room.image}" alt="${room.build_name}" />
          <h2>${room.build_name}</h2>
          <p>Location: ${room.addr_1}</p>
          <p>${room.addr_2}</p>
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
