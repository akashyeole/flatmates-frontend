import React from 'react';

const RoomDetail = ({ room }) => {
  const { buildName, roomNumber, addressLine1, addressLine2, occupancy, rent, activeStatus, additionalNote, adderMail, adderName,mobile } = room;

  return (
    <div className="room-detail">
      <h2>{buildName} - Room {roomNumber}</h2>
      <p>Address: {addressLine1}, {addressLine2}</p>
      <p>Occupancy: {occupancy}</p>
      <p>Rent: {rent}</p>
      <p>Status: {activeStatus ? 'Active' : 'Inactive'}</p>
      <p>Additional Notes: {additionalNote}</p>
      <p>Added By: {adderName} ({adderMail})</p>
      <p>Mobile: {mobile}</p>
    </div>
  );
};

export default RoomDetail;
