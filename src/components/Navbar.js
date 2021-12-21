import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./Button";
import './Navbar.css';
import {IconContext} from 'react-icons/lib'

function Navbar() {
  const [click, setClick] = useState(false);
  const[button,setButton] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu =()=>setClick(false);
  const showButton=()=>{
    if(window.innerWidth <= 960){
      setButton(false)
    }else{
      setButton(true)
    }
  };

  useEffect(() => {
    showButton()   
  }, []);

  window.addEventListener('resize',showButton);

  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
           
            C I N E M A H
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <div className="nav">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
                <Link to='/' className='nav-links'onClick={closeMobileMenu}>
                    HOME
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/movie' className='nav-links'onClick={closeMobileMenu}>
                    MOVIE
                </Link>
            </li>
            
            <li className="nav-item">
                <Link to='/dev' className='nav-links'onClick={closeMobileMenu}>
                    DEV
                </Link>
            </li>           
          </ul>
          </div>
        </div>
      </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
