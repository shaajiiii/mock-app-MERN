import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'


function Signup() {
	const [error, setError] = useState('')
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
					<form className='sform_container' >
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							required
							className='sinput'
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							required
							className='sinput'
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							required
							className='sinput'
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							required
							className='sinput'
						/>

						{error && <div className='serror_msg'> static error msg</div>}

						<button type="submit" className='sgreen_btn'>
							Sign Up
						</button>
						<button onClick={() => setError("oru error adich")}> seterror</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Signup
