import React, { useState } from 'react'
import './Register.css'
import Login from '../../pages/AuthPage/Login'
// import { Link } from 'react-router-dom'
const Register = () => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const validateForm = () => {
        if (firstName.length === 0) {
            alert('Invalid Form, First Name can not be empty')
            return
        }

        if (lastName.length === 0) {
            alert('Invalid Form, last Name can not be empty')
            return
        }

        if (email.length === 0) {
            alert('Invalid Form, Email Address can not be empty')
            return
        }

        if (password.length < 8) {
            alert(
                'Invalid Form, Password must contain greater than or equal to 8 characters.',
            )
            return
        }
        setFormSubmitted(true);
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Password:', password);

       setfirstName('');
       setlastName('');
       setemail('');
       setpassword('');
    }
    if (formSubmitted) {
        return < Login />;
    }
    return (
        <div className='registeration-container'>
            <h1 className='register-heading'>Register</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='firstName'>firstName:</label>
                    <input type='text' id="firstName" name="firstName" onChange={(e) => setfirstName(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='LastName'>LastName:</label>
                    <input type='text' id="LastName" name="LastName" onChange={(e) => setlastName(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='Email'>Email:</label>
                    <input type='text' id="Email" name="Email" onChange={(e) => setemail(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>password:</label>
                    <input type='text' id="password" name="password" onChange={(e) => setpassword(e.target.value)} />
                </div>
                <div className='btn'>
                    {/* <Link to="/login"> */}
                    <button type="button" onClick={validateForm}>Register</button>
                    {/* </Link> */}
                </div>
            </form>
        </div>
    )
}

export default Register