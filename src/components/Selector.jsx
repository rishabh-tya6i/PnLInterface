import React from 'react'
import { useState } from 'react';
import { IoSettings } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";

import './Selector.css'


const Selector = () => {

  const [isActive, setIsActive] = useState(false);
    

  function handleClick() {
    setIsActive(!isActive);
  }


  return (
    <div className='Selector'>
        <h1>PnL Report</h1>
        <hr />
        <div className='Container'>
          <select className='Day-selector'>
              <option value={"monday"}>Monday</option>
              <option value={"tuesday"}>Tuesday</option>
              <option value={"wednesday"}>Wednesday</option>
              <option value={"thursday"}>Thursday</option>
              <option value={"friday"}>Friday</option>
              <option value={"saturday"}>Saturday</option>
              <option value={"sunday"}>Sunday</option>
              <option value={"all"}>All</option>
          </select>
          <button onClick={handleClick}
        style={{
        backgroundColor: isActive ? "green" : "#fff",
        color: isActive ? "white" : "black",
        padding: "10px 20px",
        fontSize: "12px",
        margin: "0 10px",
        border: "1px solid green",
        borderRadius: "5px",
        cursor: "pointer",
      }} className='filter'>Total PNL</button>
          <input type="text" placeholder='&#8377; 0.00' />
          <button>Setting <IoSettings/></button>
          <input className='in' type="text" placeholder='Search by Client ID, Strategy Name, or Index' style={{width: '250px'}}/>
          <button className='search'>Search</button>
          <button className='download' style={{backgroundColor: "green", border: "1px solid #90BE6D", borderRadius: "5px", padding: "5px 10px", cursor: "pointer"}}>
            Excel <IoMdDownload/>
          </button>
        </div>
          
    </div>
  )
}

export default Selector
