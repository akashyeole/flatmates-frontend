import React, { useState } from 'react';
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

  const handleRemoveClick = () => {
    onRemoveClick(id);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    // Save the edited values here
    // For example, you can send them to a backend API
    // and update the component with the response
    setEditMode(false);
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
          <h2>{build_name}</h2>
          <p>{room_n}</p>
          <p>{price}</p>
          <p>{addr_1}</p>
          <p>{addr_2}</p>
          <button className="remove-button" onClick={handleRemoveClick}>
            Remove
          </button>
          <button className="remove-button" onClick={handleEditClick}>Edit</button>
        </>
      )}
    </div>
  );
};

export default RoomMateCard;
