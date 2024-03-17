import React from 'react';
import '../Header/Header.css';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; 
const Header = () => {
  return (
    <nav className="nav">
        <img src='46069.jpg' alt='logo' height={30} width={30} className='logo'></img>
        <span className='text'>Lets Make a community</span>
        <input type='text' placeholder='Enter your pincode' className='search'/>
        <span className='login-container'>
        <Link to= '/register' className="login-text">Register</Link>
        <Link to= '/register'>
        <FaUserCircle className="login-icon" />
        </Link>
       </span>
    </nav>
  )
}

export default Header