import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();


    
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/home');
        }
    })
    
    //integrating signup or register API created at backend with reactjs......
    const collectData= async ()=>{
        console.log(name, email, password);
        let result = await fetch('http://localhost:4000/api/routes/register',{
          method: 'post',
          body: JSON.stringify({name, email, password}),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        result = await result.json();
        console.log(result);
        localStorage.setItem("user", JSON.stringify(result));
        if(result){
          navigate('/home');
        }
    } 

    return (
    <>
      <div className="signup-page">
        
            <h1 className="signup-title">Register</h1>    
            <input type="text" placeholder="Enter Name" 
            value={name} onChange={(e)=>{setName(e.target.value)}} 
            className="input-box" ></input> 
            
            <input type="email" placeholder="Enter Email" 
            value={email} onChange={(e)=>{setEmail(e.target.value)}} 
            className="input-box" ></input>             
            
            <input type="password" placeholder="Enter Password" 
            value={password} onChange={(e)=>{setPassword(e.target.value)}} 
            className="input-box" ></input> 

            <button onClick={collectData} type="submit">Register</button>
        
      </div>
    </>
  );
}
