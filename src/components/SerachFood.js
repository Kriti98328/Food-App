import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function SerachFood() {
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

const searchData =(fid)=>{
  alert(fid);
  axios.get(`http://localhost:1004/food/fetch/${fid}`)
  .then((res)=>{
      console.log(res.data);
     // setFood(res.data);
      setData(res.data);
  })
  .catch((error)=>{
      console.log(error);
      alert("SOMETHING WENT WRONG ON SEARCHING DATA");
  })
}
  return (
    <div>
      <h2>SEARCH FOOD BY FOODID</h2>
      <input type="text" className='form-control' value={Food.fid}
      onChange={(event)=>{
        setFood({
            ...Food,
            fid:event.target.value
        })
      }}placeholder='ENTER THE FOOD ID'/>
       <button className='btn btn-outline-primary'
       onClick={(fid)=>{
        searchData(Food.fid);

       }}>SEARCH</button>&nbsp;&nbsp;
      <table className='table table-hover'>
        <thead>
          <tr>
            <td>FOOD ID</td>
            <td>FOOD NAME</td>
            <td1>PRICE</td1>
            
          </tr>

        </thead>
        <tbody>
          <tr>
            <td>{data.fid}</td>
            <td>{data.fname}</td>
            <td>{data.price}</td>
          </tr>
        </tbody>
      </table>
      
    </div>
  )
}

export default SerachFood
