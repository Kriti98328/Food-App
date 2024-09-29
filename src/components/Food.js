import React from 'react'
import "./Food.css"
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
function Food() {
  return (
    <div className='foodMain'>
        <div className='leftFood'>
        <Link to="AddFood">ADD FOOD</Link>
        <Link to="DeleteFood">DELETE FOOD</Link>
        <Link to="ViewFood">VIEW FOOD</Link>
        <Link to="UpdateFood">UPDATE FOOD</Link>
        <Link to="SearchFood">SEARCH FOOD</Link>
        </div>
        <div className='rightFood'>
        <Outlet/>
    </div>
    </div>
  )
}

export default Food
