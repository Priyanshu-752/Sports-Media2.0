import React from 'react'
import { Link } from 'react-router-dom'
import './VerticalNavbar.css'
const VerticalNavbar = () => {
  return (
    <div className="vertical-navbar">
      <Link to="/" className="navbar-item">Home</Link>
      <Link to="/tournament" className="navbar-item">Tournament</Link>
      <Link to="/create-post" className="navbar-item">Create Post</Link>
      <Link to="/profile" className="navbar-item">Profile</Link>
  </div>
  )
}

export default VerticalNavbar