import React, { useState,useEffect } from 'react';
import './UserHome.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



function UserHome() {


    const MySwal = withReactContent(Swal)

    const sweettest = () => {
        MySwal.fire({
            title: 'Log out?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3bb19b',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then((result) => {
            if (result.isConfirmed) {
                logout()
            }
        })
    }

    //toastify
    const notifyerror = (msg) => toast.error(msg);
    const notify = (msg) => toast(msg)


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


    const [showForm, setShowForm] = useState()


    const checkingShowForm =async ()=>{

        const usertoken = localStorage.getItem('token') 

        try {
            let applyResponse = await axios.post('http://localhost:7000/login/check-status',{Id:usertoken})
            console.log("axios respone in try");
            if (applyResponse.status === 201) {

                if(applyResponse.data.canApply) setShowForm(true);
                else setShowForm(false);


            }
        } catch (error) {
            if (error.response.status === 400) {
                console.log(error.response.data.error);
                notifyerror(error.response.data.error)
            }
        }


    }


    useEffect(() => {
       
       checkingShowForm();

    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault()
        const usertoken = localStorage.getItem('token')  // for now this is the id, need to use JWT
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
            Describe_value,
            token: usertoken

        }
        //console.log(applicationData);
        try {
            let applyResponse = await axios.post('http://localhost:7000/login/submit-application', applicationData)
            console.log("axios respone in try");
            if (applyResponse.status === 201) {

                notify(applyResponse.data + ". Please wait for confirmation to continue forward..\n Thank you");
                setCompanyName('');
                setAddress('');
                setCity('');
                setState('');
                setEmail('');
                setPhone('');
                setTeamDescription('');
                setCompanyDescription('');
                setDescribeProblem('');
                setSolution('');
                setValue('');
                setShowForm(false)


            }
        } catch (error) {
            if (error.response.status === 400) {
                console.log(error.response.data.error);
                notifyerror(error.response.data.error)
            }
        }
    }

    const logout = () => {
        localStorage.removeItem('token')
        window.location = '/'
    }

    return (


        <div className="row home-container">
            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <img src="/logout.png" alt="" title='logout' className='logut-Btn'
                onClick={sweettest} />

            {/* form  */}


            {showForm ?


                <form className='col-12 col-md-8 col-lg-6 uapplication-form' onSubmit={handleSubmit}>
                    <h1 className='mb-5'>Application for incubation</h1>
                    <div className="row">
                        <div className="col-6 mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Company Name"
                                value={companyName}
                                onChange={(e) => { setCompanyName(e.target.value) }} />
                        </div>
                        <div className="col-6 mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Address"
                                value={address}
                                onChange={(e) => { setAddress(e.target.value) }}
                            />

                        </div>
                        <div className="col-6 mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="City"
                                value={city}
                                onChange={(e) => { setCity(e.target.value) }}
                            />
                        </div>
                        <div className="col-6 mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="State"
                                value={state}
                                onChange={(e) => { setState(e.target.value) }}
                            />
                        </div>
                        <div className="col-6 mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                        </div>
                        <div className="col-6 mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Phone"
                                value={phone}
                                onChange={(e) => { setPhone(e.target.value) }}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <h6 for="exampleFormControlTextarea1">Describe your team and background</h6>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                value={Describe_team}
                                onChange={(e) => { setTeamDescription(e.target.value) }}
                            ></textarea>
                        </div>
                        <div className="form-group mb-3">
                            <h6 for="exampleFormControlTextarea1">Describe your company and products</h6 >
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                value={Describe_company}
                                onChange={(e) => { setCompanyDescription(e.target.value) }}
                            ></textarea>
                        </div>
                        <div className="form-group mb-3">
                            <h6 for="exampleFormControlTextarea1">Describe the problem you are trying to solve</h6 >
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                value={Describe_problem}
                                onChange={(e) => { setDescribeProblem(e.target.value) }}
                            ></textarea>
                        </div>
                        <div className="form-group mb-3">
                            <h6 for="exampleFormControlTextarea1">What is unique about your solution</h6 >
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                value={Describe_solution}
                                onChange={(e) => { setSolution(e.target.value) }}
                            ></textarea>
                        </div>

                        <div className="form-group mb-3">
                            <h6 for="exampleFormControlTextarea1"> What is your value proposition for your customer</h6 >
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                value={Describe_value}
                                onChange={(e) => { setValue(e.target.value) }}
                            ></textarea>
                        </div>
                        <div className="form-group">

                            <button className="btn btn-primary col-12" type="submit">Submit form</button>

                        </div>


                    </div>
                </form>



                :


                <div class="jumbotron text-center">
                    <h1 class="display-3">Thank You!</h1>
                    <p class="lead"><strong>Please wait </strong> for further instructions </p>
                    <hr></hr>
                    <p>
                        Our representative will be in touch with you...
                    </p>
                    
                </div>
            }

            {/* form end */}


        </div>


    )
}

export default UserHome
