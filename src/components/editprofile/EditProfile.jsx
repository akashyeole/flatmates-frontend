import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from 'react-router-dom';

export default function EditProfile() {

    var user = JSON.parse(localStorage.getItem('user'));
  
    const[name, setNewName] = useState(user.name);
    const[email, setCurrEmail] = useState(user.email);
    const[mobile, setNewMobile] = useState(user.mobile);
    // const navigate = useNavigate();

    
    const collectUpdateData= async ()=>{
      let result = await fetch('http://localhost:4000/api/routes/updateuser',{
        method: 'post',
        body: JSON.stringify({name, email, mobile}),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      
      const doJob = async ()=>{
        result = await result.json();
        if(result){
            localStorage.setItem("user", JSON.stringify(result))
        }
      }
      await doJob();
    } 

    return (
    <>
      <div className="signup-page">
        <form>
            
            <h1 className="signup-title">Edit Your Details</h1> 

            <input type="email" placeholder="Enter Email" 
            value={email} onChange={(e)=>{setCurrEmail(e.target.value)}} 
            className="input-box" disabled></input>             

            <input type="text" placeholder="Enter Name" 
            value={name} onChange={(e)=>{setNewName(e.target.value)}} 
            className="input-box" required></input> 

            <input type="number" placeholder="Enter Mobile No"
            value={mobile} onChange={(e)=>{setNewMobile(e.target.value)}}
            className="input-box" required></input>

            <button onClick={collectUpdateData} type="submit">Update</button>
        </form>
      </div>
    </>
  );
}
