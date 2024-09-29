import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function AddFood() {
    let [Food,setFood]=useState({
        fid:"",
        fname:"",
        price:""

    })
    let[msg,setMsg]=useState("");
    const refreshData=()=>{
        setFood({
            pid:"",
            pname:"",
            price:""
        })
        setMsg("");
    }
    const addData =()=>{
        axios.post("http://localhost:1004/food/add",Food)
        .then((res)=>{
            console.log(res.data);
            setFood(res.data);
            setMsg(res.data);
        })
        .catch((error)=>{
            console.log(error);
            alert("SOMETHING WENT WRONG ON ADDING DATA");
        })
    }
  return (
    <div>
      <h2>ADDING FOOD</h2>
      <input type="text" className='form-control' value={Food.fid}
      onChange={(event)=>{
        setFood({
            ...Food,
            fid:event.target.value
        })
      }}placeholder='ENTER THE FOOD ID'/>

<input type="text" className='form-control' value={Food.fname}
      onChange={(event)=>{
        setFood({
            ...Food,
            fname:event.target.value
        })
      }}placeholder='ENTER THE FOOD NAME'/>

<input type="text" className='form-control' value={Food.price}
      onChange={(event)=>{
        setFood({
            ...Food,
            price:event.target.value
        })
      }}placeholder='ENTER THE FOOD PRICE'/>

      <button className='btn btn-outline-primary'onClick={addData}>ADD</button>&nbsp;&nbsp;
      <button className='btn btn-outline-dark'onClick={refreshData}>REFRESH</button>
      <h3>{msg}</h3>
    </div>
  )
}

export default AddFood
