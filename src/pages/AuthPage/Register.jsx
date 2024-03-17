import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
const Register = () => {
    return (
        <div className='registeration-container'>
            <h1 className='register-heading'>Register</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='firstName'>firstName:</label>
                    <input type='text' id="firstName" name="firstName" />
                </div>
                <div className='form-group'>
                    <label htmlFor='LastName'>LastName:</label>
                    <input type='text' id="LastName" name="LastName" />
                </div>
                <div className='form-group'>
                    <label htmlFor='Email'>Email:</label>
                    <input type='text' id="Email" name="Email" />
                </div>
                <div className='form-group'>
                    <label htmlFor='passowrd'>password:</label>
                    <input type='text' id="password" name="password" />
                </div>
                <div className='btn'>
                    <Link to="/login">
                        <button type="button">Register</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Register