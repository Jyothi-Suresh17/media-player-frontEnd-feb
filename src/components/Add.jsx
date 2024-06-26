// import React from 'react';
import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addVideoApi } from '../services/allApis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setAddStatus}) {
  //create a state to hold data from input field

  const[video,setVideo]=useState({
    caption:'',
    image:'',
    url:''
  })
 console.log(video);
  // states for modal
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setVideo(
      {
        caption:'',
        image:'',
        url:''
      }
    )
    setShow(false)};
  const handleShow = () => setShow(true);

  //function for youtube embeded link


  const validateLink=(e)=>{
    
    const link =e.target.value
    console.log(link);

    if(link.includes('v=')){
      const yTkey = link.slice(-11)
      console.log(yTkey);
      let  embedLink = `https://www.youtube.com/embed/${yTkey}`
      setVideo({...video,url:embedLink})
    }
      else if(link.startsWith('https://youtu.be')){
        const yTkey = link.slice(17,28)
        console.log(yTkey);
        let  embedLink = `https://www.youtube.com/embed/${yTkey}`
        setVideo({...video,url:embedLink})
      }
    else{
      const yTkey=link.slice(-11);
      console.log(yTkey);
      let  embedLink = `https://www.youtube.com/embed/${yTkey}`;
      setVideo({...video,url:embedLink})
      console.log(video);
    }
// https://youtu.be/3AtDnEC4zak?si=6jPbFd1fKXrFc8F4
  }

  const handleUpload = async (e) => {
    e.preventDefault()

    const {caption,image,url} =video;
     if(!caption || !image || !url){
      toast.info('please fill all the fields');
     }
     
     else {
      const result=await addVideoApi(video);
      console.log(result);
      if(result.status>199 && result.status<300){
        toast.success('video uploaded successfully');
        setAddStatus(result.data)
        handleClose()

      }
      else{
        toast.error('something went wrong');
        handleClose()
      }
     }

  }
  /*
  browser link : https://www.youtube.com/watch?v=m7Bc3pLyij0
  shared link : https://youtu.be/m7Bc3pLyij0?si=8ExrfkhTHM8cyS3Q  
  
  embeded link : https://www.youtube.com/embed/m7Bc3pLyij0
  
      */




  return (
    <>
    <div className="d-flex align-items-center">
      <h5  >Upload <span id='h'>new Video</span> </h5>
      <button className="btn mb-2" onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} size='xl'/></button>
    </div>

    {/* modal for uploading videos */}
   

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>< FontAwesomeIcon icon={faFilm} className='me-2' size='xl'/> Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details!</p>
          <form className='border rounded border-secondary p-3'>
            {/* ... Rest operator */}
            <input type="text" placeholder='Video Caption' className='form-control' onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
            <input type="text"  placeholder='Video Image' className='form-control mt-3' onChange={(e)=>{setVideo({...video,image:e.target.value})}}/>
            <input type="text"  placeholder='Video URL' className='form-control mt-3' onChange={(e)=>validateLink(e)}/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer theme='colored' position='top-right' autoClose={2000} />
    </>
  )
}

export default Add