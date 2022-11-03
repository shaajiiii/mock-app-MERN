
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NewApplicationTable() {

    const [applications, setNewApplications] = useState()
    
    const getNewApplications = async () => {
        try {
            let res = await axios.get("http://localhost:7000/admin-applications/get-new-applications")
            // console.log("server response ==");
            // console.log(res);
            // console.log("array to be set as state====");
            // console.log(res.data.newApplications);
            let storearr = res.data.newApplications

            // console.log(storearr);

            setNewApplications(storearr);
            // console.log('state : ',applications);
        } catch (error) {
            console.log("axious error logg");
            if (error) console.log(error);
        }
    }

    const updateToPending = async (_id)=>{
        //console.log(_id);// ive id ethi
        let updateData ={
            doc_Id : _id
        }
        try {
            axios.put("http://localhost:7000/admin-applications/update-to-pending",updateData).then(()=>{
                getNewApplications() 
                

            })
            
            
        } catch (error) {
            console.log("axious error logg");
            if (error) console.log(error);
        }


    }

    useEffect(() => {
        console.log("use-Effect fired");
        getNewApplications();

    }, [])



    return (

        <>
            {/* {console.log("state is component : "+ applications)} */}

            <h1 style={{ margin: "1rem 0rem 1rem 0rem " }}> New Application List</h1>

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

                        {applications &&
                            applications.map((singleApplication, index) => {
                                return (
                                    <tr>
                                        <td scope="row">{index+1}</td>
                                        <td>{singleApplication.companyName}</td>
                                        <td>{singleApplication.phone}</td>
                                        <td>
                                            <button style={{marginRight:"2rem"}} type="button" class="btn btn-dark ">Open</button>
                                            <button onClick={()=>{updateToPending(singleApplication._id)}} type="button" class="btn btn-warning">Start Proccess</button>

                                        </td>

                                    </tr>

                                    
                                );
                            })
                        }

                    </tbody>
                </table>




            </div>

        </>
    )
}

export default NewApplicationTable
