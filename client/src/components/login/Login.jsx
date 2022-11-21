import React, { useState,useEffect } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
 
   
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

    let checkuser = ()=>{
        const user = localStorage.getItem('token')
        if(user){
            window.location = '/';
        } 

    }

    useEffect(()=>{
        checkuser();
    },[]);


    //login function 
    let handleLogin = async (e)=>{
        e.preventDefault()
        let LoginData = {
            email:email,
            password:password
        }
        try {
            let resp = await axios.post("http://localhost:7000/login",LoginData);
            if(resp.status === 200){
                localStorage.setItem("token", resp.data.token);// this has user id
                //console.log(resp.data.token);
                window.location ='/'
                
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
                        <h1>Login </h1>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            required
                            className='input'
                            onChange={(e)=>{setEmail(e.target.value)}}
							value={email}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                            className='input'
                            onChange={(e)=>{setPassword(e.target.value)}}
							value={password}
                        />

                        {error && <div className='error_msg'>{error}</div>}

                        <button type="submit" className='green_btn'>
                            Log In
                        </button>
                       
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
