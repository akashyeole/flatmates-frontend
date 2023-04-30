import React, { useState } from 'react';
import './FindRoomMate.css';
import tempImg from '../../images/housenotfound.png';

// Find a Room page
const FindRoomMate = () => {
  const [rooms, setRooms] = useState([]);
  const [newRoom, setNewRoom] = useState({ build_name: '', room_n: '', addr_1:'', addr_2:'', price: '', occupancy: undefined, image: tempImg });
  const [isRoomAdded, setIsRoomAdded] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex >= 0) {
      setRooms(prevRooms => {
        const updatedRooms = [...prevRooms];
        updatedRooms[editIndex] = newRoom;
        return updatedRooms;
      });
      setIsRoomAdded(true);
      setIsSubmitted(true);
      setEditIndex(-1);
    } else if (rooms.length === 0) {
      setRooms(prevRooms => [...prevRooms, newRoom]);
      setIsRoomAdded(true);
    } else {
      setIsRoomAdded(false);
    }
    setNewRoom({ build_name: '', room_n: '', addr_1:'', addr_2:'', price: '', occupancy: undefined, image: tempImg });
  };

  const handleChange = (e) => {
    if (!isSubmitted) {
      const { name, value } = e.target;
      setNewRoom(prevRoom => ({ ...prevRoom, [name]: value }));
    }
  };

  const handleEdit = (index) => {
    setNewRoom(rooms[index]);
    setEditIndex(index);
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
            placeholder="Address Line 2"
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
          <button className="remove-button" type="submit">{editIndex >= 0 ? 'Update' : 'Submit'}</button>
        </form>
        {isRoomAdded && (
          <p style={{ color: 'green', textAlign: 'center' }}>{editIndex >= 0 ? 'Pleaase Update Your Room!' : 'Room added successfully!'}</p>
        )}
        {!isRoomAdded && (<p style={{ color: 'red', textAlign: 'center' }}>Please add a single room Details</p>)}
            {rooms.length > 0 && (
      <div className="room-list">
        {rooms.map((room, index) => (
          <div key={index} className="room-card">
              <button className="edit-button" onClick={() => handleEdit(index)}>Edit</button>
            </div>
        ))}
      </div>
    )}
  </div>
</div>
);
};

export default FindRoomMate;
