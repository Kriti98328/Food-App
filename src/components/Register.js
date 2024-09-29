import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Login from './Login';
function Register() {
  let [Register,setRegister]=useState({
    uname:"",
    pass:"",
    nm:""

})
let[msg,setMsg]=useState("");
    const refreshData=()=>{
        setRegister({
            uname:"",
            pass:"",
            nm:""
        })
        setMsg("");
    }
    let[errors,setErrors]=useState({
      uname:"",
        pass:"",
        nm:""
    })
    const validForm=()=>{
      var isValid=true;
      var newErrors=({
        uname:"",
        pass:"",
        nm:""
      })
      if(Register.uname.trim().length<=4)
      {
        newErrors.uname="USERNAME MUST BE ATLEAST 5 CHARECTER";
        isValid=false;
      }
      if(Register.pass.trim().length<=4)
        {
          newErrors.pass="PASSWORD MUST BE ATLEAST 5 CHARECTER";
          isValid=false;
        }
        if(Register.nm.trim().length<=0)
          {
            newErrors.nm="NAME MUST BE GIVEN";
            isValid=false;
          }
          setErrors(newErrors);
      return isValid;
    }
    const addData =()=>{
      axios.post("http://localhost:1004/register/add",Register)
      .then((res)=>{
          console.log(res.data);
          setRegister(res.data);
          setMsg(res.data);
      })
      .catch((error)=>{
          console.log(error);
          alert("SOMETHING WENT WRONG ON SIGNING UP");
      })
  }
  return (
    <div style={{width:"30%",margin:"50px auto"}}>
      <h2>SIGN UP</h2>
      <marquee>DISCOUNT OFFER</marquee>
      <input type="text" className='form-control' value={Register.uname}
      onChange={(event)=>{
        setRegister({
            ...Register,
            uname:event.target.value
        })
      }}placeholder='ENTER THE UNAME'/>
      <h3 style={{color:"red"}}>{errors.uname}</h3>

<input type="text" className='form-control' value={Register.pass}
      onChange={(event)=>{
        setRegister({
            ...Register,
            pass:event.target.value
        })
      }}placeholder='ENTER THE PASSWORD'/>
      <h3 style={{color:"red"}}>{errors.pass}</h3>

<input type="text" className='form-control' value={Register.nm}
      onChange={(event)=>{
        setRegister({
            ...Register,
            nm:event.target.value
        })
      }}placeholder='ENTER THE NAME'/>
      <h3 style={{color:"red"}}>{errors.nm}</h3>
      

<button className='btn btn-outline-primary' onClick={()=>
  {
    if(validForm()===true){
      addData();
    }
  }
}>REGISTER</button>&nbsp;&nbsp;
      <button className='btn btn-outline-dark'onClick={refreshData}>REFRESH</button>
      <h3>{msg}</h3>
    </div>
  )
}

export default Register
