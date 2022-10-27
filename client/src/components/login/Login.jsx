import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {

    const [error, setError] = useState('');


    return (
        <div className='login_container'>
            <div className='login_form_container'>
                <div className='left'>
                    <form className='form_container' >
                        <h1>Login to Your Account</h1>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            required
                            className='input'
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                            className='input'
                        />

                        {error && <div className='error_msg'>There si(static) an error</div>}

                        <button type="submit" className='green_btn'>
                            Log In
                        </button>
                        <button onClick={() => setError('error adich')}>set error</button>
                    </form>
                </div>
                <div className='right'>
                    <h1>New Here ?</h1>
                    <Link to="/signup">
                        <button type="button" className='white_btn'>
                            Register Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
