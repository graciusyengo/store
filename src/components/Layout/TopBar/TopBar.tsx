
import './TopBar.css'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
function TopBar() {
  return (
    <div className="top-bar">
        <div className="social-icons">
        <CiFacebook size={30} />
        <FaInstagram  size={30}/>
        <CiLinkedin size={30} />
  
        </div>
        <p className="promo-message">FREE SHIPPING THIS WEEK ORDER OVER - $75</p>
        <div className="options">
            <div className="dropdown">
                <button className="dropbtn">CURRENCY ▼</button>
                <div className="dropdown-content">
                    <a href="#">USD ($)</a>
                    <a href="#">EUR (€)</a>
                    <a href="#">GBP (£)</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">LANGUAGE ▼</button>
                <div className="dropdown-content">
                    <a href="#">English</a>
                    <a href="#">Français</a>
                    <a href="#">Español</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopBar