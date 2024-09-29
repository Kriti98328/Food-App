import React from 'react'
import { Navigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
  let [Login,setLogin]=useState({
    uname:"",
    pass:"",
   

})
let[msg,setMsg]=useState("");
var navigate=useNavigate();
const getData =(uname,pass)=>{
  alert(uname);
  alert(pass);
  axios.get(`http://localhost:1004/register/login/${uname}/${pass}`)
  .then((res)=>{
      console.log(res.data);
     // setLogin(res.data);
     if(res.data==="LOGIN SUCCESSFUL"){
      navigate("/nav");
     }
      setMsg(res.data);
  })
  .catch((error)=>{
      console.log(error);
      alert("SOMETHING WENT WRONG IN LOGIN");
  })
}
  return (
    <div style={{width:"30%",margin:"50px auto"}}>
      <h2>LOGIN</h2>
      
      <input type="text" className='form-control' value={Login.uname}
      onChange={(event)=>{
        setLogin({
            ...Login,
            uname:event.target.value
        })
      }}placeholder='ENTER THE USERNAME'/>
      <input type="password" className='form-control' value={Login.pass}
      onChange={(event)=>{
        setLogin({
            ...Login,
            pass:event.target.value
        })
      }}placeholder='ENTER THE PASSWORD'/>
      
       <button className='btn btn-outline-primary'
       onClick={(uname,pass)=>{
        getData(Login.uname,Login.pass);

       }}>LOGIN</button>&nbsp;&nbsp;
      
      <button className='btn btn-outline-dark'onClick={()=>{
        navigate("/");
      }}>HOME</button>
      <h3>{msg}</h3>
    </div>
  )
}

export default Login