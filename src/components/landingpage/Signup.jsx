import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[mobile, setMobile] = useState();
    const navigate = useNavigate();
    
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/home');
        }
    })
    
    const collectData= async (e)=>{
      e.preventDefault();
      if(name.length === 0 || email.length === 0 || mobile.length === 0 || password.length === 0) return;
      let result = await fetch('http://localhost:4000/api/routes/register',{
        method: 'post',
        body: JSON.stringify({name, email, mobile, password}),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      result = await result.json();
      
      localStorage.setItem("user", JSON.stringify(result));
      if(result){
        navigate('/home');
      }
    } 

    return (
    <>
      <div className="signup-page">
        <form>
          <h1 className="signup-title">Register</h1>    
          <input type="text" placeholder="Enter Name" 
          value={name} onChange={(e)=>{setName(e.target.value)}} 
          className="input-box" required></input> 

          <input type="number" placeholder="Enter Mobile No"
          value={mobile} onChange={(e)=>{setMobile(e.target.value)}}
          className="input-box" required></input>
          
          <input type="email" placeholder="Enter Email" 
          value={email} onChange={(e)=>{setEmail(e.target.value)}} 
          className="input-box" required></input>             
          
          <input type="password" placeholder="Enter Password" 
          value={password} onChange={(e)=>{setPassword(e.target.value)}} 
          className="input-box" required/>

          <button onClick={(e) => collectData(e)} type="submit">Register</button>
        </form>
      </div>
    </>
  );
}
