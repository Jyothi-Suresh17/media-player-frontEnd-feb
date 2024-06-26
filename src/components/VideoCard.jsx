import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// modal
import { useState } from 'react';


import Modal from 'react-bootstrap/Modal';
import { addToHistoryApi, deleteVideoApi } from '../services/allApis';

function VideoCard({displayVideo,setDeleteVideosStatus,isPresent}) {

  // console.log(displayVideo?.caption);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);


  const handleShow = async() => {
    setShow(true);
    // for watch history 
    let caption =displayVideo.caption;
    let url=displayVideo.url;
    let time = new Date();

    let displayObject={
      year:'numeric',
      month:'numeric',
      day:'numeric',
      hour:'2-digit',
      minute:'2-digit',
      second:'2-digit'
    }

    let timeStamp=new Intl.DateTimeFormat('en-GB',displayObject).format(time);
    console.log(timeStamp);

    //sending data to backend[watch history]
   const reqBody={
    caption,url,timeStamp
   }
   const result =await addToHistoryApi(reqBody);
   console.log(result);

  };

  //for deleting a video from display

  const handleDelete= async(id)=>{
    const result = await deleteVideoApi(id);
    // console.log(result);
    if(result.status>=200 && result.status<300){
      setDeleteVideosStatus(result.data);
    }
    
  }

  //function  for drag and drop

 const videoDrag=(e,id)=>{
  console.log('card dragged is '+id);
  e.dataTransfer.setData("videoId",id)
 }

  return (
    <>
    <Card style={{ width: '100%' }} draggable onDragStart={(e)=>{videoDrag(e,displayVideo.id)}}>
{!isPresent&&
      <Card.Img variant="top" src={displayVideo?.image} width={'100%'} height={'250px'} onClick={handleShow}/>}
      <Card.Body className='d-flex justify-content-between'>
        <Card.Title>{displayVideo?.caption}</Card.Title>
       
        
        {!isPresent&&<Button variant="danger" onClick={()=>handleDelete(displayVideo?.id)} className='btn btn-lg'><FontAwesomeIcon icon={faTrash} /></Button>}
      </Card.Body>
    </Card>


    {/* modal which is shown when you click on the image */}

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >{displayVideo?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="404" src={`${displayVideo?.url}?autoplay=1`} title="Conan Gray - Heather" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default VideoCard