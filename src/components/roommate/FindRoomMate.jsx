import React, { useState, useEffect } from 'react';
import './FindRoomMate.css';
import tempImg from '../../images/housenotfound.png';

// Find a Room page
const FindRoomMate = () => {

  const [room, setRoom] = useState({});
  const [editable, setEditable] = useState(false);


  useEffect(() => {
    const doJob = async ()=> {
      let user = await JSON.parse(localStorage.getItem('user'))
        const response = await fetch('http://localhost:4000/api/routes/room/' + user.email, {
          method: 'GET'
        })
        const json = await response.json()
        const { buildName, roomNumber, addressLine1, addressLine2, rent, occupancy, activeStatus } = json[0]
        if(json.length == 0){
          setEditable(true);
        }
        setRoom(json[0]);
    }
    doJob()
    
  }, []);

  // const handleSubmit = (e) => {
  //   // e.preventDefault();
  //   // if (editIndex >= 0) {
  //   //   setRooms(prevRooms => {
  //   //     const updatedRooms = [...prevRooms];
  //   //     updatedRooms[editIndex] = newRoom;
  //   //     return updatedRooms;
  //   //   });
  //   //   setIsRoomAdded(true);
  //   //   setIsSubmitted(true);
  //   //   setEditIndex(-1);
  //   // } else if (rooms.length === 0) {
  //   //   setRooms(prevRooms => [...prevRooms, newRoom]);
  //   //   setIsRoomAdded(true);
  //   // } else {
  //   //   setIsRoomAdded(false);
  //   // }
  //   // setNewRoom({ build_name: '', room_n: '', addr_1:'', addr_2:'', price: '', occupancy: undefined, image: tempImg });
  // };

  const handleChange = (e) => {
    console.log(e.target.value )
    setRoom({ ...room, [e.target.name]: e.target.value });
  };

  // const

  const activeHandler = () => {
    setRoom({...room, activeStatus: !room.activeStatus});
  }

  const btnHandleClick = async () => {
    if(!editable){
      setEditable(true);
    }else{
      let user = await JSON.parse(localStorage.getItem('user'))
      setEditable(false);
      let result = await fetch('http://localhost:4000/api/routes/room',{
          method: 'post',
          body: JSON.stringify({...room, adderMail: user.email, adderName: user.name, mobile: user.mobile}),
          headers: {
            'Content-Type': 'application/json'
          }
        });
    }
  }

  return (
    <div className="find-a-room-page">
      <h1 style={{ color: 'rgb(41, 102, 215)', padding: '10px', justifyContent: 'center', flex: 1 }}>
        Please Enter Available Room
      </h1>
      <div className="add-room-form">
        <form >
          <input
            type="text"
            name="buildName"
            value={room.buildName}
            onChange={handleChange}
            placeholder="Building/House Name"
            required disabled = {!editable}
          />
          <input
            type="text"
            name="roomNumber"
            value={room.roomNumber}
            onChange={handleChange}
            placeholder="Room Number"
            required disabled = {!editable}
          />
          <input
            type="text"
            name="addressLine1"
            value={room.addressLine1}
            onChange={handleChange}
            placeholder="Address Line 1"
            required disabled = {!editable}
          />
          <input
            type="text"
            name="addressLine2"
            value={room.addressLine2}
            onChange={handleChange}
            placeholder="Address Line 2"
            disabled = {!editable}
          />
          <input
            type="number"
            name="occupancy"
            value={room.occupancy}
            onChange={handleChange}
            placeholder="Occupancy"
            required
            disabled = {!editable}
          />
          <input
            type="number"
            name="rent"
            value={room.rent}
            onChange={handleChange}
            placeholder="Rent"
            required
            disabled = {!editable}
          />
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={activeHandler} checked = {room.activeStatus} disabled = {!editable}/>
            <label className="form-check-label" for="flexSwitchCheckDefault">Enable Public Visibility</label>
          </div>
          <button className="remove-button" type = {editable ? "button" : "submit"} onClick={btnHandleClick}>{ editable ? "Save details" : "Edit details"}</button>
        </form>
  </div>
</div>
);
};

export default FindRoomMate;
