import React from 'react';


function PendingApplicationTable() {
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

                        <tr>
                            <td scope="row">1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td scope="row">1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td scope="row">1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>

                        <tr>
                            <td scope="row">1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>


                    </tbody>
                </table>




            </div>

        </div>
    )
}

export default PendingApplicationTable
