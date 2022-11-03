import React from 'react';
import NewApplicationTable from '../../components/NewApplicationTable/NewApplicationTable';
import PendingApplicationTable from '../../components/Pending-Application-list/PendingApplicationTable';

function Applist() {
  
  

  return (
    <div>
      <div className='container'>
        <NewApplicationTable />
        <PendingApplicationTable/>
      </div>
    </div>
  )
}

export default Applist
