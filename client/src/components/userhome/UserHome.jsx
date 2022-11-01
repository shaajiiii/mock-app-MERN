import React, { useState } from 'react';
import './UserHome.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


function UserHome() {
    //states
    const [companyName, setCompanyName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [Describe_team, setTeamDescription] = useState("");
    const [Describe_company, setCompanyDescription] = useState("");
    const [Describe_problem, setDescribeProblem] = useState("");
    const [Describe_solution, setSolution] = useState("");
    const [Describe_value, setValue] = useState("");


    const handleSubmit = (e)=>{
        e.preventDefault()
        const applicationData = {
            companyName,
            address,
            city,
            state,
            email,
            phone,
            Describe_team,
            Describe_company,
            Describe_problem,
            Describe_solution,
            Describe_value

        }
        console.log(applicationData);
    }

    const logout = ()=>{
        localStorage.removeItem('token')
        window.location = '/'
    }

    return (

        <div className="row home-container">

            <img src="/logout.png" alt="" title='logout' className='logut-Btn'  onClick={logout}/>

            <form className='col-12 col-md-8 col-lg-6 application-form' onSubmit={handleSubmit}>
                <h1 className='mb-5'>Application for incubation</h1>
                <div className="row">
                    <div className="col-6 mb-3">
                        <input 
                        type="text"
                        className="form-control"
                         placeholder="Company Name" 
                         value={companyName}
                         onChange={(e)=>{setCompanyName(e.target.value)}}/>
                    </div>
                    <div className="col-6 mb-3">
                        <input 
                        type="text" 
                        className="form-control"
                         placeholder="Address" 
                         value={address}
                         onChange={(e)=>{setAddress(e.target.value)}}
                         />
                         
                    </div>
                    <div className="col-6 mb-3">
                        <input
                         type="text"
                         className="form-control"
                           placeholder="City"
                           value={city}
                           onChange={(e)=>{setCity(e.target.value)}}
                            />
                    </div>
                    <div className="col-6 mb-3">
                        <input 
                        type="text" 
                        className="form-control" 
                        placeholder="State"
                        value={state}
                        onChange={(e)=>{setState(e.target.value)}}
                         />
                    </div>
                    <div className="col-6 mb-3">
                        <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Email" 
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        />
                    </div>
                    <div className="col-6 mb-3">
                        <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Phone"
                        value={phone}
                        onChange={(e)=>{setPhone(e.target.value)}}
                         />
                    </div>

                    <div className="form-group mb-3">
                        <label for="exampleFormControlTextarea1">Describe your team and background</label>
                        <textarea 
                       className="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3"
                        value={Describe_team}
                        onChange={(e)=>{setTeamDescription(e.target.value)}}
                        ></textarea>
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleFormControlTextarea1">Describe your company and products</label>
                        <textarea 
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3"
                        value={Describe_company}
                        onChange={(e)=>{setCompanyDescription(e.target.value)}}
                        ></textarea>
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleFormControlTextarea1">Describe the problem you are trying to solve</label>
                        <textarea 
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3"
                        value={Describe_problem}
                        onChange={(e)=>{setDescribeProblem(e.target.value)}}
                        ></textarea>
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleFormControlTextarea1">What is unique about your solution</label>
                        <textarea 
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3"
                        value={Describe_solution}
                        onChange={(e)=>{setSolution(e.target.value)}}
                        ></textarea>
                    </div>

                    <div className="form-group mb-3">
                        <label for="exampleFormControlTextarea1"> What is your value proposition for your customer</label>
                        <textarea 
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3"
                        value={Describe_value}
                        onChange={(e)=>{setValue(e.target.value)}}
                        ></textarea>
                    </div>
                    <div className="form-group">

                        <button className="btn btn-primary col-12" type="submit">Submit form</button>

                    </div>


                </div>
            </form>



        </div>


    )
}

export default UserHome
