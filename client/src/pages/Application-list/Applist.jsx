import React,{useState,useEffect} from 'react';
import NewApplicationTable from '../../components/NewApplicationTable/NewApplicationTable';
import PendingApplicationTable from '../../components/Pending-Application-list/PendingApplicationTable';

function Applist() {
  
  const[reload, setReload]=useState(false); //had to fix a bug. never do this
  
  const initLoad = ()=>{

    let val = true;
    (reload)? setReload(!val):setReload(val);   
    
  }



  return (
    <div>
      <div className='container'>
        <NewApplicationTable initReload={initLoad}  />
        <PendingApplicationTable reloadVal={reload} />
      </div>
    </div>
  )
}

export default Applist
