import React,{useState,useEffect} from 'react';
import axios from 'axios';

function PendingApplicationTable() {

    const [pendingApplications, setPendingApplications] = useState();
    const [singleApplication, setSingleApplications] = useState();
   

    const getPendingApplications = async () => {
        try {
            let res = await axios.get("http://localhost:7000/admin-applications/get-pending-applications")
            // console.log("server response ==");
            // console.log(res);
            // console.log("array to be set as state====");
            // console.log(res.data.newApplications);
            let storearrPending = res.data.pendingApplications

            // console.log(storearr);

            setPendingApplications(storearrPending);
            // // console.log('state : ',applications);
        } catch (error) {
            console.log("axious error logg");
            if (error) console.log(error);
        }
    }

    const updateToApproved = async (_id)=>{
        //console.log(_id);// ive id ethi
        let updateData ={
            doc_Id : _id
        }
        try {
            axios.put("http://localhost:7000/admin-applications/update-to-approved",updateData).then(()=>{
                getPendingApplications() 
                

            })
            
            
        } catch (error) {
            console.log("axious error logg");
            if (error) console.log(error);
        }


    }


    const rejectApplication = async (_id)=>{
        //console.log(_id);// ive id ethi
        let updateData ={
            doc_Id : _id
        }
        try {
            axios.put("http://localhost:7000/admin-applications/reject-application",updateData).then(()=>{
                getPendingApplications() 
                

            })
            
            
        } catch (error) {
            console.log("axious error logg");
            if (error) console.log(error);
        }


    }


    useEffect(() => {
        console.log("use-Effect fired");
        getPendingApplications();

    }, [])


    return (


        <>
        
        
        
       


        <div className='pending-table-wrap'>
            <h1 style={{ margin: "1rem 0rem 1rem 0rem " }}> Pending List</h1>

            <div className="table-responsive">



                <table style={{ borderColor: "black" }} className="table">
                    <thead className="thead-dark" style={{ backgroundColor: "black", color: 'white' }}>
                        <tr>
                            <th scope="col">S.no</th>
                            <th scope="col">Company Name</th>
                            <th scope="col">Phone </th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                    {pendingApplications &&
                            pendingApplications.map((singleApplication, index) => {
                                return (
                                    <tr>
                                        <td scope="row">{index+1}</td>
                                        <td>{singleApplication.companyName}</td>
                                        <td>{singleApplication.phone}</td>
                                        <td>
                                            <button style={{marginRight:"2rem"}} type="button" class="btn btn-dark "
                                              onClick={()=>{setSingleApplications(singleApplication)}} >Open</button>
                                           {(singleApplication.status==="pending"?
                                           <>
                                           <button onClick={()=>{if(window.confirm("approve this application?"))updateToApproved(singleApplication._id)}}  type="button" class="btn btn-success mx-2"> Approve </button>
                                           <button onClick={()=>{if(window.confirm("reject this application?"))rejectApplication(singleApplication._id)}}  type="button" class="btn btn-danger"> Reject </button>
                                           </>
                                           :
                                           <span style={{color:'green'}}>Already approved</span>)
                                           } 

                                        </td>

                                    </tr>

                                    
                                );
                            })
                        }


                    </tbody>
                </table>




            </div>

        </div>





                        
            {/* opened form */}




            {
                singleApplication &&


                <form className='col-12 col-md-8 col-lg-6 application-form' >
                <h3>Application details</h3>
                 <div className="row">
                     <div className="col-6 mb-3">
                         <input
                             type="text"
                             className="form-control"
                             placeholder="Company Name"
                            value={singleApplication.companyName}
                             readOnly
                             />
                     </div>
                     <div className="col-6 mb-3">
                         <input
                             type="text"
                             className="form-control"
                             placeholder="Address"
                            value={singleApplication.address}
                             readOnly
                     
                         />

                     </div>
                     <div className="col-6 mb-3">
                         <input
                             type="text"
                             className="form-control"
                             placeholder="City"
                            value={singleApplication.city}
                             readOnly
                       
                         />
                     </div>
                     <div className="col-6 mb-3">
                         <input
                             type="text"
                             className="form-control"
                             placeholder="State"
                             value={singleApplication.state}
                             readOnly
                           
                         />
                     </div>
                     <div className="col-6 mb-3">
                         <input
                             type="text"
                             className="form-control"
                             placeholder="Email"
                            value={singleApplication.email}
                             readOnly
                            
                         />
                     </div>
                     <div className="col-6 mb-3">
                         <input
                             type="text"
                             className="form-control"
                             placeholder="Phone"
                            value={singleApplication.phone}
                             readOnly
                            
                         />
                     </div>

                     <div className="form-group mb-3">
                         <h6 for="exampleFormControlTextarea1">Team and background</h6>
                         <textarea
                             className="form-control"
                             id="exampleFormControlTextarea1"
                             rows="1"
                              value={singleApplication.Describe_team}
                             readOnly
                            
                         ></textarea>
                     </div>
                     <div className="form-group mb-3">
                         <h6 for="exampleFormControlTextarea1">Company and products</h6 >
                         <textarea
                             className="form-control"
                             id="exampleFormControlTextarea1"
                             rows="1"
                              value={singleApplication.Describe_company}
                             readOnly
                           
                         ></textarea>
                     </div>
                     <div className="form-group mb-3">
                         <h6 for="exampleFormControlTextarea1">Problem they are trying to solve</h6 >
                         <textarea
                             className="form-control"
                             id="exampleFormControlTextarea1"
                             rows="1"
                              value={singleApplication.Describe_problem}
                             readOnly
                             
                         ></textarea>
                     </div>
                     <div className="form-group mb-3">

                     <button style={{float:"right"}} type="button" class="btn btn-dark"
                     onClick={()=>{setSingleApplications(null)}}
                     >Close</button>
                        
                     </div>
                    
                    


                 </div>
             </form>


            }










        </>
    )
}

export default PendingApplicationTable
