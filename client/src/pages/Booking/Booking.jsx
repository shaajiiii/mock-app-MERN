import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './booking.css';


function Booking() {

  const [rooms, setRooms] = useState()


  const bookRoom = ()=>{
    console.log("book room request");
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

  useEffect(() => {
    //console.log("use-Effect fired");
    getAllRooms()

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

                  <h6>{room.no}</h6>

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
