import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VideoCard from './VideoCard';
import { allCategoryApi, getVideoApi,updateCategoryApi } from '../services/allApis';
import { useEffect } from 'react';

import { useState } from 'react';

function View({addStatus,setDragstatus}) {

  const [videoDetails, setVideoDetails] = useState([]); //for checking wheather data present or not ..

//state for deleting on-time

const [deleteVideoStatus,setDeleteVideosStatus]=useState([])

  //function for displaying the videocard content using api call

  const getVideo=async()=>{
    const result = await getVideoApi()
    // console.log(result.data);
    setVideoDetails(result.data)
  }

  //for drag and drop category

  const DragOver=(e)=>{
    e.preventDefault()

  }
  const videoDrop= async(e)=>{
   const{videoId,categoryId}=JSON.parse( e.dataTransfer.getData('dataShared'))
   console.log(videoId,categoryId);
   //get all category 
   const {data} =await allCategoryApi();
   console.log(data);
   //get selected category
   const selectedCategory =data.find((item)=>item.id==categoryId);
   console.log(selectedCategory);
   //remove video from the selected category
   const updatedVideos = selectedCategory.allVideo.filter((item)=>item.id!=videoId)

   const reqBody={
    categoryName:selectedCategory.categoryName,
    allVideo:updatedVideos,
        id:selectedCategory.id
   }
      await updateCategoryApi(categoryId,reqBody)
      setDragstatus(true)
  }
  //getVideo is a side effect so to handle this we use useEffect hook

  useEffect(()=>{
     getVideo()
  },[addStatus,deleteVideoStatus])
  // console.log(videoDetails);


  return (
    <>
              {/* here we must display the videos and for that we crwate a new component called VideoCard inside components folder and place its selector here */}
    <Row  id='vieww' className='w-100 ms-4 ms-md-0' droppable onDragOver={(e)=>DragOver(e)} onDrop={(e)=>videoDrop(e)}
    >

      {

        videoDetails?.length>0?
        videoDetails?.map((items)=>(
          <Col key={items.id} sx={12} md={6} lg={4} xl={3} className='d-flex justify-content-center align-items-center py-2'>
            <VideoCard  displayVideo={items}  setDeleteVideosStatus={setDeleteVideosStatus}/>
          </Col>
          
        )): <p className='text-danger fs-5 mt-4'>No video uploaded yet!!</p>
      }

     
    

    </Row>
    </>
  )
}

export default View