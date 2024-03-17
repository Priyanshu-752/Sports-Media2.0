import React from 'react'
import '../Header/Header.css'
import { FaUserCircle } from 'react-icons/fa'; 
const Header = () => {
  return (
    <nav className="nav">
        <img src='46069.jpg' alt='logo' height={30} width={30} className='logo'></img>
        <span className='text'>Lets Make a community</span>
        <input type='text' placeholder='search' className='search'/>
       <span className='login-container'>
        <span className="login-text">Login</span>
        <FaUserCircle className="login-icon" />
       </span>
    </nav>
  )
}

export default Header