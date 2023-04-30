import React, { useState } from 'react';
import axios from 'axios';
import './RoomMateCard.css';

const RoomMateCard = ({ room, onRoomClick, onRemoveClick }) => {
  const { id, build_name, room_n, addr_1, addr_2, price, image } = room;

  const [editMode, setEditMode] = useState(false);
  const [editedValues, setEditedValues] = useState({
    build_name: build_name,
    room_n: room_n,
    addr_1: addr_1,
    addr_2: addr_2,
    price: price
  });

  const handleRoomClick = () => {
    onRoomClick(id);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    // Save the edited values here
    // For example, you can send them to a backend API
    // and update the component with the response
    setEditMode(false);
    setEditedValues({
      build_name: editedValues.build_name,
      room_n: editedValues.room_n,
      addr_1: editedValues.addr_1,
      addr_2: editedValues.addr_2,
      price: editedValues.price
    });
  };

  const handleCancelClick = () => {
    setEditMode(false);
    setEditedValues({
      build_name: build_name,
      room_n: room_n,
      addr_1: addr_1,
      addr_2: addr_2,
      price: price
    });
  };

  const handleSubmitClick = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/routes/login', editedValues);
      // If the POST request is successful, you can update the component state or perform other actions
      console.log(response.data);
      setEditMode(false);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedValues((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="room-card rounded-3">
      <img src={image} alt={build_name} />
      {editMode ? (
        <>
          <input
            type="text"
            name="build_name"
            value={editedValues.build_name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="room_n"
            value={editedValues.room_n}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="addr_1"
            value={editedValues.addr_1}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="addr_2"
            value={editedValues.addr_2}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="price"
            value={editedValues.price}
            onChange={handleInputChange}
          />
          <button className="remove-button" onClick={handleSaveClick}>Save</button>
          <button className="remove-button" onClick={handleCancelClick}>Cancel</button>
        </>
      ) : (
        <>
          <h2>{editedValues.build_name}</h2>
          <p>{editedValues.room_n}</p>
          <p>{editedValues.addr_1}</p>
          <p>{editedValues.addr_2}</p>
          <p>{editedValues.price}</p>
          <button className="remove-button" onClick={handleEditClick}>Edit</button>
          <button className="remove-button" onClick={handleSubmitClick}>Submit</button>
        </>
      )}
    </div>
  );
};

export default RoomMateCard;
