import { faLeftLong,faHouse,faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteWatchHistoryApi, getWatchHistoryApi } from '../services/allApis'



function Watchhistory() {
  // videocard handleshow function.....


  //the data we got from database should be saved inside a state

  const [videoHistory,setVideoHistory]=useState([])

  //state for real time deletion

  const [deleteStatus,setDeleteStatus]=useState([])
  //get history

  const getHistory =async()=>{
     
    const result = await getWatchHistoryApi();
    // console.log(result);
    if(result.status>=200 && result.status<300){
      setVideoHistory(result.data);
    }
  }
  // console.log(videoHistory);

  //data should be seeen on rendering so create a useEffect

  useEffect(()=>{
    getHistory()
  },[deleteStatus]);

const deleteHsitory=async(id)=>{

  const result =await deleteWatchHistoryApi(id);
  setDeleteStatus(result.data)
  console.log(result);
}

  return (
   <>
    <div className="d-flex p-3 mt-5 w-100">
    <h4 className='ms-md-5'>Watch History</h4>
    <h5 className='ms-auto me-md-5' style={{textDecoration:'none',color:'white'}}><Link to={'/home'}><span id='h'><FontAwesomeIcon icon={faLeftLong} className='me-2' />Back to Home</span><FontAwesomeIcon icon={faHouse} className='ms-2' /></Link></h5>
    </div>

<div className="row w-100 mb-5">
  <div className="col-md-2"></div>

  <div className="col-md-8" >
    {videoHistory?.length>0?<Table className='table table-bordered table-light' responsive >
      <thead>
          <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Url</th>
          <th>Time Stamp</th>
          <th>Action</th>
          </tr>
      </thead>

        
      <tbody>
      {videoHistory?.map((item,index)=>(<tr>
         <td>{index+1}</td>
          <td>{item.caption}</td>
          
          <td><Link to={item.url} target='_blank' style={{textDecoration:'none'}}>{item.url}</Link></td>
          <td>{item.timeStamp}</td>
          <td className='ms-2 text-center' ><button className='btn ' onClick={()=>deleteHsitory(item.id)}><FontAwesomeIcon  icon={faTrashCan} style={{color: "#ff0000",}} /></button></td>
         </tr>))}
      </tbody>
    </Table>
:
    <p className='text-danger fs-3'>No Videos watched yet!!!</p>}
  </div>
  <div className="col-md-2"></div>
</div>
   
   </>
  )
}

export default Watchhistory