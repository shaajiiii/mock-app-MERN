
//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components


import "./Header.css";


const Header = () => {


    return (
        <>

            <div class="main-wrap">
                <input id="slide-sidebar" type="checkbox" role="button" />
                <label for="slide-sidebar">
                    <img src="/menu.png" style={{height:"50px",width:"50px"}} alt="" />
                    
                </label>
            
                
                <div class="sidebar">
                    <div className="icon" style={{left:"5px",padding:"0.5rem"}}>
                        <img src="/home.png"style={{height:"50px",width:"50px"}} alt="" />
                        <span className="sidebar-item">Settings</span>
                    </div>
                    <div className="icon" style={{left:"5px",padding:"0.5rem"}}>
                        <img src="/home.png"style={{height:"50px",width:"50px"}} alt="" />
                        <span className="sidebar-item">Settings</span>
                    </div>
                    <div className="icon" style={{left:"5px",padding:"0.5rem"}}>
                        <img src="/home.png"style={{height:"50px",width:"50px"}} alt="" />
                        <span className="sidebar-item">Settings</span>
                    </div>
                    <div className="icon" style={{left:"5px",padding:"0.5rem"}}>
                        <img src="/home.png"style={{height:"50px",width:"50px"}} alt="" />
                        <span className="sidebar-item">Settings</span>
                    </div>
                    
                   
                </div>



                {/* update every other page into this */}
                
                <div class="content-window">
                    <h1>My Portfolio</h1>
                </div>


            </div>


        </>
    );
};

export default Header;
