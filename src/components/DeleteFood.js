import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function DeleteFood() {
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
    const deleteData =(fid)=>{
        alert(fid);
        axios.delete(`http://localhost:1004/food/del/${fid}`)
        .then((res)=>{
            console.log(res.data);
            setFood(res.data);
            setMsg(res.data);
        })
        .catch((error)=>{
            console.log(error);
            alert("SOMETHING WENT WRONG ON  DELETING DATA");
        })
    }
  return (
    <div>
       <h2>DELETE FOOD</h2>
      <input type="text" className='form-control' value={Food.fid}
      onChange={(event)=>{
        setFood({
            ...Food,
            fid:event.target.value
        })
      }}placeholder='ENTER THE FOOD ID'/>
       <button className='btn btn-outline-primary'
       onClick={(fid)=>{
        deleteData(Food.fid);

       }}>DELETE</button>&nbsp;&nbsp;
      <button className='btn btn-outline-dark'onClick={refreshData}>REFRESH</button>
      <h3>{msg}</h3>
    </div>
  )
}

export default DeleteFood
