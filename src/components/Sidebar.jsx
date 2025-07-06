import React from 'react'
import './Sidebar.css'
import { IoMdHome } from "react-icons/io";
import { ImLab } from "react-icons/im";
import { RiStockFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { IoBarChartSharp } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";
import { GoPersonFill } from "react-icons/go";
import { GrMoney } from "react-icons/gr";



const Sidebar = () => {
  return (
    <div className='sidebar'>
        <ul>
            <li><IoMdHome /></li>
            <li><ImLab /></li>
            <li><RiStockFill /></li>
            <li><FaShoppingCart /></li>
            <li><FaMagnifyingGlassChart /></li>
            <li><IoBarChartSharp /></li>
            <li><FaLink /></li>
            <li><GoPersonFill /></li>
            <li><GrMoney /></li>
        </ul>
    </div>
  )
}

export default Sidebar
