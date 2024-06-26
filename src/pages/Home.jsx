import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import View from '../components/View'
import Category from '../components/Category'



// here we have add videos,catagories
function Home() {
//state for on-time updation inside category'
const[dragStatus,setDragstatus] = useState(false)
  
  // for state lifting
  const[addStatus,setAddStatus]=useState([])

  //useEffect for on-time updation



  return (
   <>
    <div className="d-flex mt-5 p-4">
      {/* 1) a pathless component is created called Add.js used for adding videos to our media player and its selector will be placed here */}
      <Add setAddStatus={setAddStatus}/>
      {/* now we need watch history so for that we use link tag */}
      <h5 className='ms-auto'><Link to={'/watch-history'} style={{textDecoration:'none'}}><FontAwesomeIcon icon={faClockRotateLeft}/> <span id='h'>Watch History</span></Link></h5>
    </div>

    {/* 2 cols ..one for displaying videos and another one for catagories */}
    <div className="row w-100 p-5">
      <div className="col-md-9">
        <h4 >All Videos</h4>
          {/* new component for displaying added videos known as View and is created in components and its selector will placed here */}
          <View addStatus={addStatus} setDragstatus={setDragstatus}/>
      </div>
      <div className="col-md-3 ps-md-4">
       {/* here catagories are placed ..create a Category /component i components file then place the selector here */}
       <Category dragStatus={dragStatus} setDragstatus={setDragstatus} />
      </div>
    </div>
   </>
  )
}

export default Home