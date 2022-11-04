import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './booking.css';


function Booking() {

  const [rooms, setRooms] = useState();
  const [approvedCompanies, setApprovedCompanies] = useState([]);



  const bookRoom = async (roomNo,company) => {
    let updateData ={
      roomNo,
      company
    }

    try {
      let res = await axios.post("http://localhost:7000/rooms/book-room",updateData)

      //call get all rooms here
      if(res){
        getAllRooms()
      }

    } catch (error) {
      console.log("axious error logg");
      if (error) console.log(error);
    }
    
  }


  const getAllRooms = async () => {
    try {
      let res = await axios.get("http://localhost:7000/rooms/get-all-rooms")

      let storeRooms = res.data.rooms



      setRooms(storeRooms)

    } catch (error) {
      console.log("axious error logg");
      if (error) console.log(error);
    }
  }

  const getApprovedCompanies = async () => {
    try {
      let res = await axios.get("http://localhost:7000/rooms/get-approved-companies")

      // console.log(res);
      let approvedCompany = res.data.approvedApplications
      // console.log("companies==");
      // console.log(approvedCompany);

      setApprovedCompanies(approvedCompany)

    } catch (error) {
      console.log("axious error logg");
      if (error) console.log(error);
    }
  }




  useEffect(() => {
    //console.log("use-Effect fired");
    getAllRooms();
    getApprovedCompanies();

  }, [])



  return (
    <div className='rooms-container'>
      <div className="container">

        <h1>Booking Slot</h1>

        <div className="row">


          {rooms &&
            rooms.map((room, index) => {
              return (



                <div style={room.status == "available" ? { backgroundColor: '#4bd636' } : { backgroundColor: 'orange' }}

                  className="room col-10 col-md-2 m-3">

                  <h6>Room No:{room.no}</h6>


                  {
                    room.status == "available" ? 

                    <>
                    

                    <h6>choose a company</h6>

                    <select onChange={(e)=>{bookRoom(room.no,e.target.value)}} id="company-list">
  
                      {
                        approvedCompanies.map((company) => {
  
                          return (
                            <option value={company}> {company} </option>
                          )
                        })
                      }
  
                    </select>
                    </>

                     :

                     <h4>{room.companyName}</h4>
                  }

                  

                  {/* <h6>choose a company</h6>

                  <select id="company-list">

                    {
                      approvedCompanies.map((company) => {

                        return (
                          <option value="">{company}</option>
                        )
                      })
                    }

                  </select> */}


                </div>



              );
            })
          }










        </div>



      </div>


    </div>
  )
}

export default Booking
