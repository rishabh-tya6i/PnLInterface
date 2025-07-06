import React, { useContext } from "react";
import { MdMenu } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { FaCaretUp } from "react-icons/fa6";
import { GoPersonFill } from "react-icons/go";
import { ThemeContext } from "../context/ThemeContext";



import './Header.css'


const Header = () => {
    const menuHandler = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('active');
    }

    const[isLogedIn, setIsLoggedIn] = React.useState(false);

    const { theme, toggleTheme } = useContext(ThemeContext);


  return (
    <div className="header">
      <button onClick={menuHandler} style={{backgroundColor: "transparent", border: "none", cursor: "pointer", color: "white"}}>
        <MdMenu size={27} />
      </button>
      <div className="nifty">
        <p>25461</p>
        <h3>Nifty <FaCaretUp/></h3>

      </div>
      <div className="nifty">
        <p>25461</p>
        <h3>Bank Nifty <FaCaretUp/></h3>

      </div>
      <div className="nifty">
        <p>25461</p>
        <h3>Fin Nifty <FaCaretUp/></h3>
      </div>
      <div className="dark-mode">
        <button onClick={toggleTheme} style={{backgroundColor: "transparent", border: "none", cursor: "pointer", color: "white"}}>
          {theme === "light" ? <MdDarkMode size={27}/> : <MdOutlineLightMode size={27}/>}
        </button>
      </div>
      <div className="user">
        {isLogedIn && <p>Welcome User</p>}
        <button onClick={() => setIsLoggedIn(!isLogedIn)} style={{backgroundColor: "blue", border: "none", cursor: "pointer", color: "white", padding: "5px 10px", borderRadius: "5px"}}>
          {isLogedIn ? <GoPersonFill size={27}/> : "Login"}
        </button>
        
      </div>
    </div>
  )
}

export default Header
