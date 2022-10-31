import React, { useState } from 'react';
import './UserHome.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function UserHome() {

 


    

    return (
        <div className='login_container'>
            <div className='login_form_container'>
                <div className='left'>
                <h1>user home paggeeee</h1>
                    {/* <form className='form_container' onSubmit={handleLogin}>
                        <h1>user home paggeeee</h1>
                      
                        <button onClick={() => setError('error adich')}>set error</button>
                    </form> */}
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

export default UserHome
