import {
  faPlus,
  faTrashCan,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import VideoCard from "./VideoCard";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addCategoryApi, allCategoryApi ,deleteCategoryApi,aVideoApi, updateCategoryApi} from "../services/allApis";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Category({setDragstatus,dragStatus}) {
  //modal
  const [show, setShow] = useState(false);

  //state for category name
  const [categoryName, setCategoryName] = useState("");

  //state for displaying content

  const [allCategory, setAllCategory] = useState([]);

  //state because a function has formed for getAllCategory()
  // const [addStatus,setAddStatus] = useState(false)

  

  const handleClose = () => {
    setCategoryName("");
    setShow(false);
  };
  const handleShow = () => setShow(true);

  //to add category
  const addCategory = async () => {
    if (categoryName) {
      const reqBody = {
        categoryName,
        allVideo: [],
      };

      const result = await addCategoryApi(reqBody);
      console.log(result);

      if (result.status >= 200 && result.status < 300) {
        // setAddStatus(true)
        handleClose();
        toast.success("Category created successfully");
        getAllCategory()
      } else {
        console.log(result);
      }
    } else {
      toast.info("Please add the category name");
    }
  };

  //to get category for displaying

  const getAllCategory = async () => {
    const result = await allCategoryApi();
    console.log(result.data);
    //displaying category
    if (result.status >= 200 && result.status < 300) {
      setAllCategory(result.data);
      
    }
  };
  // console.log(allCategory);

  //function to delete category
  const delCategory=async(id)=>{
const result = await deleteCategoryApi(id)
console.log(result);
getAllCategory();
  }

  //function for drag and drop..here content is being dropped

  const dragOver=(e)=>{
    e.preventDefault()
  }

  const videoDrop=async(e,categoryID)=>{
        console.log(`category id is ${categoryID}`);
        //accessing video id from view component
        const videoId=e.dataTransfer.getData("videoId");

        console.log("video id is",videoId);

        //get the video details from backend
        const {data} =await aVideoApi(videoId)
        console.log(data)

        const selectedCategory = allCategory.find((item)=>item.id==categoryID);

       
        if(selectedCategory.allVideo.find((item) => item.id == data.id)){
          toast.warning("video already exist in this category")
        }
        else{
          
          selectedCategory.allVideo.push(data);
          await updateCategoryApi(categoryID,selectedCategory);
          getAllCategory();
        }
       
        
  }

  //to remove a video from category using drag and drop

  const DragStart=(e,videoId,categoryId)=>{
console.log(`the video dragged ${videoId}`);
console.log(`category id ${categoryId}`);

let dataShare={
  videoId,categoryId
}
e.dataTransfer.setData('dataShared',JSON.stringify(dataShare))
  }


  useEffect(() => {
    // setAddStatus(false)
    getAllCategory();
    setDragstatus(false)
   
  }, [dragStatus]);
  return (
    <>
      <div className="w-100 mt-md-1 mt-4 p-4  " >
        <button className="btn btn-warning  w-100" onClick={handleShow}>
          Add New Category <FontAwesomeIcon icon={faPlus} />{" "}
        </button>
      </div>

      {allCategory?.length>0?
      allCategory?.map((item)=>(
        <div className="mt-md-5 mt-2  "  key={item.id}>
        <div className="border border-secondary mt-3 p-3  ms-4 ms-md-0 rounded"  droppable onDragOver={(e)=>{dragOver(e)}} onDrop={(e)=>{videoDrop(e,item.id)}}>
          <div  className="d-flex md-w-100  " >
            <h6>{item.categoryName}</h6>
            <button className="btn btn-danger ms-auto">
              <FontAwesomeIcon icon={faTrashCan} size="sm" onClick={()=>{delCategory(item.id)}}/>
            </button>
          </div>
          <Row>
           {item?.allVideo?.length>0? 
           item?.allVideo?.map((videoItem)=>(<Col sm={12} className="mt-3" key={item.caption}  draggable onDragStart={(e)=>DragStart(e,videoItem.id,item.id)}>
            <VideoCard displayVideo={videoItem} isPresent={true} />
            </Col>)):null}
          </Row>
         
        </div>
      </div>
      ))
       
      :null}

      
          <div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title className="text-warning">
                  {" "}
                  <FontAwesomeIcon icon={faPenNib} /> Add New Category
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form
                  action=""
                  className="form border rounded padding border-secondary"
                >
                  <input
                    type="text"
                    placeholder="Category name"
                    onChange={(e) => {
                      setCategoryName(e.target.value);
                    }}
                    className="form-control"
                  />
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="warning" onClick={addCategory}>
                  Add
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
       
    </>
  );
}

export default Category;
