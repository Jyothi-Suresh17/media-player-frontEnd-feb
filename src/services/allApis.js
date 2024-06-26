//API calls

import { commonApi } from "./commonApi"
import { serverURl } from "./serviceUrl"


//.........................VIDEOS...............................//

//api to add videos
export const addVideoApi= async(reqbody)=>{

  return  await commonApi ('POST',`${serverURl}/videos`,reqbody) //commonApi-->axios-->db.json[database]
}


//to get all videos
export const getVideoApi = async()=>{
  return await commonApi('GET',`${serverURl}/videos`,"")
}

//to delete a video from our display

export const deleteVideoApi=async(id)=>{
  return await commonApi('DELETE',`${serverURl}/videos/${id}`,{})
}


//....................WATCH_HISTORY........................//


//api to add video to watch history

export const addToHistoryApi =async(reqbody)=>{
  return await commonApi('POST',`${serverURl}/watchHistory`,reqbody)
}

//to get data from watchhistroy

export const getWatchHistoryApi = async()=>{
  return await commonApi('GET',`${serverURl}/watchHistory`,'')
}

//to delete a video from watch history

export const deleteWatchHistoryApi =async(id)=>{
  return await commonApi('DELETE',`${serverURl}/watchHistory/${id}`,{})
}

//..............CATEGORIES.....................................//

//api to add Categories

export const addCategoryApi =async(reqBody)=>{
  return await commonApi('POST',`${serverURl}/categories`,reqBody)
}

//API  to get all category 

export const allCategoryApi=async()=>{
  return await commonApi('GET',`${serverURl}/categories`,'')
}

//api to delete category

export const deleteCategoryApi =async(id)=>{
  return await commonApi('DELETE',`${serverURl}/categories/${id}`,{})
}


//api to get video and drop it on category

export const aVideoApi =async(id)=>{
  return await commonApi('GET',`${serverURl}/videos/${id}`,'')
}

//api to update api

export const updateCategoryApi = async(id,reqBody)=>{
  return await commonApi('PUT',`${serverURl}/categories/${id}`,reqBody)
}


