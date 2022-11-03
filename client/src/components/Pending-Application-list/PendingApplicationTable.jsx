import React,{useState,useEffect} from 'react';
import axios from 'axios';

function PendingApplicationTable() {

    const [pendingApplications, setPendingApplications] = useState();


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
            // console.log('state : ',applications);
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


    useEffect(() => {
        console.log("use-Effect fired");
        getPendingApplications();

    }, [])


    return (
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
                                            <button style={{marginRight:"2rem"}} type="button" class="btn btn-dark ">Open</button>
                                           {(singleApplication.status==="pending"?
                                           <button onClick={()=>{updateToApproved(singleApplication._id)}}  type="button" class="btn btn-success"> Approve </button>
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
    )
}

export default PendingApplicationTable
