import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FindRoomMate.css';
import tempImg from '../../images/housenotfound.png';
// import { useNavigate } from 'react-router-dom';

// Find a Room page
const FindRoomMate = () => {

  const [room, setRoom] = useState({});
  const [editable, setEditable] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const mb = async()=>{
      const doJob = async()=>{
        let user = localStorage.getItem('user')
        if(user == null) navigate("/");
      }
      await doJob();
    }
    mb();

    const doJob = async ()=> {
      let user = await JSON.parse(localStorage.getItem('user'))
        const response = await fetch('http://localhost:4000/api/routes/room/' + user.email, {
          method: 'GET'
        })
        const json = await response.json()
        const { buildName, roomNumber, addressLine1, addressLine2, rent, occupancy, additionalNote, activeStatus } = json[0]
        if(json.length == 0){
          setEditable(true);
        }
        setRoom(json[0]);
    }
    doJob()
    
  }, []);

  const handleChange = (e) => {
    setRoom({ ...room, [e.target.name]: e.target.value });
  };

  // const

  const activeHandler = () => {
    setRoom({...room, activeStatus: !room.activeStatus});
  }

  const btnHandleClick = async (e) => {
    // e.preventDefault();
    if(!editable){
      setEditable(true);
    }else{
      let user = await JSON.parse(localStorage.getItem('user'))
      // console.log(room)
      if(room.buildName.length == 0 || room.roomNumber.length == 0 || room.rent == 0) return;
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
        Enter Available Room Details
      </h1>
      <div className="add-room-form rounded-4">
        <form id= "mf">
          <input
            type="text"
            name="buildName"
            value={room.buildName}
            onChange={handleChange}
            placeholder="Building/House Name"
            disabled = {!editable}
            required 
          />
          <input
            type="text"
            name="roomNumber"
            value={room.roomNumber}
            onChange={handleChange}
            placeholder="Room Number"
            disabled = {!editable}
            required 
          />
          <input
            type="text"
            name="addressLine1"
            value={room.addressLine1}
            onChange={handleChange}
            placeholder="Address Line 1"
            disabled = {!editable}
            required 
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
            disabled = {!editable}
            required
          />
          <input
            type="number"
            name="rent"
            value={room.rent}
            onChange={handleChange}
            placeholder="Rent"
            disabled = {!editable}
            required
          />
          <textarea 
            type="textarea"
            name="additionalNote"
            value={room.additionalNote}
            onChange={handleChange}
            placeholder="Additional Note"
            disabled = {!editable}
            required
          > ds</textarea>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={activeHandler} checked = {room.activeStatus} disabled = {!editable}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Public Visibility</label>
          </div>
          <button className="remove-button" type = {editable ? "button" : "submit"} onClick={btnHandleClick}>{ editable ? "Save details" : "Edit details"}</button>
        </form>
  </div>
</div>
);
};

export default FindRoomMate;
