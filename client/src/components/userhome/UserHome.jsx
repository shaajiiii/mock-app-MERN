import React, { useState } from 'react';
import './UserHome.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


function UserHome() {


    const logout = ()=>{
        localStorage.removeItem('token')
        window.location = '/'
    }





    return (

        <div className="row home-container">

            <img src="/logout.png" alt="" title='logout' className='logut-Btn'  onClick={logout}/>

            <form className='col-12 col-md-8 col-lg-6 application-form'>
                <h1 className='mb-5'>Application for incubation</h1>
                <div class="row">
                    <div class="col-6 mb-3">
                        <input type="text" class="form-control" placeholder="Name" />
                    </div>
                    <div class="col-6 mb-3">
                        <input type="text" class="form-control" placeholder="Address" />
                    </div>
                    <div class="col-6 mb-3">
                        <input type="text" class="form-control" placeholder="City" />
                    </div>
                    <div class="col-6 mb-3">
                        <input type="text" class="form-control" placeholder="State" />
                    </div>
                    <div class="col-6 mb-3">
                        <input type="text" class="form-control" placeholder="Email" />
                    </div>
                    <div class="col-6 mb-3">
                        <input type="text" class="form-control" placeholder="Phone" />
                    </div>

                    <div class="form-group mb-3">
                        <label for="exampleFormControlTextarea1">Describe your team and background</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="form-group mb-3">
                        <label for="exampleFormControlTextarea1">Describe your company and products</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="form-group mb-3">
                        <label for="exampleFormControlTextarea1">Describe the problem you are trying to solve</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="form-group mb-3">
                        <label for="exampleFormControlTextarea1">What is unique about your solution</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <div class="form-group mb-3">
                        <label for="exampleFormControlTextarea1"> What is your value proposition for your customer</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="form-group">

                        <button class="btn btn-primary col-12" type="submit">Submit form</button>

                    </div>




                </div>
            </form>



        </div>


    )
}

export default UserHome
