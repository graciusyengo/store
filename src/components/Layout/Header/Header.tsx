
import './Header.css'
import { BsFillCartFill } from "react-icons/bs";
import { MdOutlineNotifications } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa"; // Icône du menu hamburger
import { useState } from 'react';
function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
        
          <span className="logo-text">Ekka</span>
        </div>

      
          {/* Bouton hamburger avec animation */}
          <div className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>

             {/* Navigation avec affichage conditionnel */}
             <div className={`navbar-with-search ${isMenuOpen ? "active" : ""}`}>
          <div className="search-box">
            <input type="text" placeholder="Search products..." />
          </div>
          <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </div>

      

        <div className="icons">
          <div className="icon">
            <BsFillCartFill size={34}  className='cart-icon'/>


            <span className='number'>4</span>
          </div>
          <div className="icon">
            <MdOutlineNotifications size={40} className='cart-icon' />
            <span className='number'>3</span>
          </div>
         
        </div>


      </div>
    </header>

  )
}

export default Header