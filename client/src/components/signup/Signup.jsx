import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './Signup.css';


function Signup() {
	const [error, setError] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');



	let handleSubmit = async (e)=>{	
		e.preventDefault();
		console.log("handled sumbit fired====");
		let SignUpData = {
			firstName: firstName,
			lastName:lastName,
			email:email,
			password:password
		}
		try {
			let resp = await axios.post("http://localhost:7000/signup",SignUpData);
			//console.log(SignUpData);
			console.log(resp);
			if(resp.status === 201){
				setError('');setEmail('');setFirstName('');setLastName('');setPassword('');
			}
			
		} catch (error) {
			if(error.response.status===400){
				//console.log('inside if');
				setError(error.response.data.message)
				//console.log(error.response.data.message);
			}else{
				console.log(error);
			}
	
		}
		
		// console.log(resp);
	}

	//test function M
	let testSomething = ()=>{
		let SignUpData = {
			firstName: firstName,
			lastName:lastName,
			email:email,
			password:password
		}
		console.log("test fuction log===");
		console.log(SignUpData);
	}
	
	return (
		<div className='signup_container'>
			<div className='signup_form_container'>
				<div className='sleft'>
					<h1>Welcome Back</h1>
					<Link to='/'>
						<button type="button" className='swhite_btn'>
							Go to Log In
						</button>
					</Link>
				</div>

				<div className='sright'>
					<form className='sform_container' onSubmit={handleSubmit} >
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							required
							className='sinput'
							onChange={(e)=>{setFirstName(e.target.value)}}
							value={firstName}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							required
							className='sinput'
							onChange={(e)=>{setLastName(e.target.value)}}
							value={lastName}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							required
							className='sinput'
							onChange={(e)=>{setEmail(e.target.value)}}
							value={email}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							required
							className='sinput'
							onChange={(e)=>{setPassword(e.target.value)}}
							value={password}
						/>

						{error && <div className='serror_msg'> {error}</div>}

						<button type="submit" className='sgreen_btn'>
							Sign Up
						</button>
					
						<button onClick={testSomething}> invoke test function .. {
							
						}</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Signup
