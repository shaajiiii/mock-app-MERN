import React, { useState,useEffect } from 'react';
import './admin-login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AdminLogin() {
 
   
    const [error, setError] = useState('');
    const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

    // let checkuser = ()=>{
    //     const user = localStorage.getItem('token')
    //     if(user){
    //         window.location = '/';
    //     } 

    // }

    // useEffect(()=>{
    //     checkuser();
    // },[]);


    //login function 
    let handleLogin = async (e)=>{
        e.preventDefault()
        let AdminLoginData = {
            username:username,
            password:password
        }
        try {
            let resp = await axios.post("http://localhost:7000/admin-login",AdminLoginData);
            if(resp.status === 200){
                localStorage.setItem("adminStatus", resp.data.adminStatus);
                //console.log(resp.data.token);
                window.location ='/admin'
                
            }
            
        } catch (error) {
            if(error.response.status===400){
                console.log(error);
				//console.log('inside if');
				setError(error.response.data.message)
				//console.log(error.response.data.message);
			}else{
				console.log(error);
			}
        }

    }


    return (
        <div className='login_container'>
            <div className='login_form_container'>
                <div className='left'>
                    <form className='form_container' onSubmit={handleLogin}>
                        <h1> Admin Login</h1>
                        <input
                            type="text"
                            placeholder="User name"
                            name="username"
                            required
                            className='input'
                            onChange={(e)=>{setUsername(e.target.value);setError('')}}
							value={username}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                            className='input'
                            onChange={(e)=>{setPassword(e.target.value);setError('')}}
							value={password}
                        />

                        {error && <div className='error_msg'>{error}</div>}

                        <button type="submit" className='green_btn'>
                            Log In
                        </button>
                       
                    </form>
                </div>
               
            </div>
        </div>
    )
}

export default AdminLogin
