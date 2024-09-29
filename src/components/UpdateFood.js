import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function UpdateFood() {
    let [Food,setFood]=useState({
        fid:"",
        fname:"",
        price:""

    })
    let [data,setData]=useState({
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
        //setMsg("");
    }
    const UpdateData =(fid)=>{
        alert(fid);
        axios.put(`http://localhost:1004/food/upd/${fid}`,Food)
        .then((res)=>{
            console.log(res.data);
           setData(res.data)
           // setFood(res.data);
            //setMsg(res.data);
        })
        .catch((error)=>{
            console.log(error);
            alert("SOMETHING WENT WRONG ON UPDATING DATA");
        })
    }
  return (
    <div>
      <h2>UPDATING FOOD</h2>
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

      <button className='btn btn-outline-primary'onClick={(fid)=>{ UpdateData(Food.fid);}
        
      }>UPDATE</button>&nbsp;&nbsp;
      <button className='btn btn-outline-dark'onClick={refreshData}>REFRESH</button>
      
      <h2>{data.fid}{data.fname}{data.price}</h2>
    </div>
  )
}

export default UpdateFood
