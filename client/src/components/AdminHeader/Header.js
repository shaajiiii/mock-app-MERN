
//import useState hook to create menu collapse state
import React, { useState } from "react";
import { Outlet,useNavigate } from "react-router-dom";

//import react pro sidebar components


import "./Header.css";


const Header = () => {

    const navigate = useNavigate()

    return (
        <>

            <div class="main-wrap">
                <input id="slide-sidebar" type="checkbox" role="button" />
                <label for="slide-sidebar">
                    <img src="/menu.png" style={{height:"50px",width:"50px"}} alt="" />
                    
                </label>
            
                
                <div class="sidebar">
                    <div onClick={()=>{navigate('/admin')}} className="icon" >
                        <img src="/home.png"style={{height:"50px",width:"50px"}} alt="" />
                        <span className="sidebar-item">Home</span>
                    </div>
                    <div onClick={()=>{navigate('/admin/applications')}} className="icon" >
                        <img src="/file.png"style={{height:"50px",width:"50px"}} alt="" />
                        <span className="sidebar-item">Application List</span>
                    </div>
                    <div onClick={()=>{navigate('/admin/record-track')}} className="icon" >
                        <img src="/calendar.png"style={{height:"50px",width:"50px"}} alt="" />
                        <span className="sidebar-item">Record List</span>
                    </div>
                    <div onClick={()=>{navigate('/admin/booking')}} className="icon" >
                        <img src="/booking.png"style={{height:"50px",width:"50px"}} alt="" />
                        <span className="sidebar-item">Booking</span>
                    </div>
                    <div className="icon" >
                        <img src="/power.png"style={{height:"50px",width:"50px"}} alt="" />
                        <span className="sidebar-item">Log out</span>
                    </div>
                    
                   
                </div>



                {/* update every other page into this */}

                <div class="content-window">
                   <Outlet/>
                </div>


            </div>


        </>
    );
};

export default Header;
