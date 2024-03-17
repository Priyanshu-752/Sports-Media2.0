import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
const Authpage = () => {
  return (
    <div className='login-containers'>
      <h1 className='login-heading'>login</h1>
      <form>
        <div className='form-group'>
          <label htmlFor='Email'>Email:</label>
          <input type='text' id="Email" name="Email" />
        </div>
        <div className='form-group'>
          <label htmlFor='passowrd'>password:</label>
          <input type='text' id="password" name="password" />
        </div>
        <div className='btn'>
          <Link to="/">
            <button type="button">login</button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Authpage