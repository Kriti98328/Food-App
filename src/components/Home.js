import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    var navigate=useNavigate();
  return (
    <div>
      <img src="https://th.bing.com/th/id/OIP.50Zjdq7GQNkecdEb_j0DAgHaE8?w=255&h=185&c=7&r=0&o=5&pid=1.7"
      height="" width="" alt="NO IMAGE"/>
      <br></br><br></br>
      <button className='btn btn-outlinr-primary' 
      onClick={()=>{
        navigate("/login");
      }}>LOGIN</button>&nbsp; &nbsp;
      <button className='btn btn-outlinr-dark'
      onClick={()=>{
        navigate("/register");
      }}>SIGNUP</button>
    </div>
  )
}

export default Home
