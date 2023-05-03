import React from 'react';
import './RoomDetails.css';
import Map from '../map/Map';

const RoomDetail = ({ room, onClose }) => {
  const { buildName, roomNumber, addressLine1, addressLine2, occupancy, rent, activeStatus, additionalNote, adderMail, adderName,mobile } = room;

  return (
    <>
    <div className="modal-wrapper"></div>
    <div className="modal-container rounded-4 p-5">
      <center><h2 style={{marginBottom: "30px"}}>{buildName} - {roomNumber}</h2></center>
      <div className='detail-item'><span class="material-symbols-outlined">home</span><b>Address-</b> {addressLine1}, {addressLine2}</div>
      <div className='detail-item'><span class="material-symbols-outlined">diversity_3</span><b>Occupancy-</b> {occupancy}</div>
      <div className='detail-item'><span class="material-symbols-outlined">paid</span><b>Rent-</b> {rent}</div>
      <div className='detail-item'><span class="material-symbols-outlined">description</span><b>Additional Notes-</b> {additionalNote}</div>
      <div className='detail-item'><span class="material-symbols-outlined">account_circle</span><b>Added by-</b> {adderName} ({adderMail})</div>
      <div className='detail-item'><span class="material-symbols-outlined">call</span><b>Phone No-</b> {mobile}</div>
      <div className='my-4 mx-3 rounded-3' style={{height: "300px"}}><Map address = {buildName+addressLine1+addressLine2}/></div>
      <center><button className='d-button rounded-2' onClick={onClose}>Close</button></center>
    </div>
    </>
  );
};

export default RoomDetail;
