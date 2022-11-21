import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';



function Home() {


  const [newCount, setNewCount] = useState()
  const [pendingCount, setPendingCount] = useState()
  const [approvedCount, setApprovedCount] = useState()

  const fetchCounts = async () => {
    try {
      let res = await axios.get("http://localhost:7000/admin-applications/fetch-counts")
      // console.log("server response ==");
      // console.log(res);
      // console.log("array to be set as state====");
      // console.log(res.data.newApplications);
      let newCountdata = res.data.newApplicationCount
      let pendingCountData = res.data.pendingAppCount
      let approvedCountData = res.data.approvedAppCount


      // console.log(storearr);

      setNewCount(newCountdata);
      setPendingCount(pendingCountData)
      setApprovedCount(approvedCountData)
      // console.log('state : ',applications);
    } catch (error) {
      console.log("axious error logg");
      if (error) console.log(error);
    }
  }



  useEffect(() => {

    fetchCounts();

  }, [])


  return (
    <div className='container m-5'>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>



        {newCount &&

          <div class="card text-white bg-danger m-3 col-md-3" >
            <div class="card-header">New</div>
            <div class="card-body">
              <h5 class="card-title">{newCount} New Applications</h5>
              <p class="card-text">You have {newCount} new applications that needs your attention!</p>
            </div>
          </div>

        }


        {pendingCount &&

          <div class="card text-white bg-warning m-3 col-md-3" >
            <div class="card-header">Pending</div>
            <div class="card-body">
              <h5 class="card-title">{pendingCount} Pending Applications</h5>
              <p class="card-text">You have {pendingCount} pending applications that needs to be resolved..</p>
            </div>
          </div>

        }

        {approvedCount &&

          <div class="card text-white bg-success m-3 col-md-3" >
            <div class="card-header">Approved</div>
            <div class="card-body">
              <h5 class="card-title">{approvedCount} Approved Applications</h5>
              <p class="card-text">Currently there are {approvedCount} companies.. </p>
            </div>
          </div>

        }



      </div>

    </div>
  )
}

export default Home
