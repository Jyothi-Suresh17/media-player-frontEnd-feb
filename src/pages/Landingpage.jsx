import React from "react";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Landingpage() {
  return (
    <>
      <div className="container">
        <div className="row mt-5 w-100 row1 mt-5 justify-content-center align-item-center">
          <div className="col-md-1"></div>

          <div className="col-md-5 p-4">
            <h3 className=" my-4">
              Welcome to <span className="text-warning">Media Player</span>
            </h3>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              ipsam itaque deserunt pariatur expedita velit, recusandae
              architecto vitae corrupti, sunt a numquam officiis obcaecati
              repudiandae voluptatum. Dignissimos ab maxime temporibus! Cum
              corrupti ex porro tenetur praesentium consequatur, voluptate
              perspiciatis excepturi nesciunt pariatur, perferendis omnis qui
              nihil quaerat maxime temporibus dolorem similique cumque suscipit.
              Hic molestiae cumque dolore facilis enim laborum? Quidem aut sa.
            </p>
            <button className="btn btn-warning mt-4"><Link style={{textDecoration:'none',color:'white'}} to={"/home"}>Get Started</Link></button>
          </div>
          <div className="col-md-5 d-flex mt-5 justify-content-center align-item-center p-md-5">
            <img
              src="https://cdn.dribbble.com/users/1972362/screenshots/4420197/cassette.gif"
              className="img-fluid rounded w-75"
              alt="front-image"
            />
          </div>

          <div className="col-md-1"></div>
        </div>

        <div className="row row2 my-3 justify-content-center align-item-center">
          <h3 className="text-center mt-5 mb-4">Features</h3>

          <div className="col-md-1 me-md-5"></div>

          <div className="col-md-3  px-5 px-md-4 my-3">
            <Card style={{ width: "100%" }} className="p-3">
              <Card.Img variant="top" src="https://i.pinimg.com/originals/b2/ce/98/b2ce98392df5c686796e9233d77175fc.gif" className="w-100"  height={'300px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-3 px-5 px-md-4 my-3 ">
            <Card style={{ width: "100%" }} className="p-3">
              <Card.Img variant="top" src="https://media4.giphy.com/media/3o6MbjR66zpTZktiUM/200w.gif?cid=6c09b952gq9cfuuus5rerar08ohaw2nlm0c4v8iy2ffohz5l&ep=v1_gifs_search&rid=200w.gif&ct=g" className="w-100"  height={'300px'}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-3  px-5 px-md-4  my-3">
            <Card style={{ width: "100%" }} className="p-3">
              <Card.Img variant="top" src="https://youtubebasket.com/wp-content/uploads/2022/01/youtube-mobile.gif" className="w-100" height={'300px'}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-1"></div>
        </div>

        <div className="row row3 w-100 mt-5 ms-1 p-4 ">
          <div className="col-md-1"></div>

          <div className="col-md-10 border m-md-5 rounded p-5">
             <div className="row row-int w-100">
              <div className="col-md-6">
                    <h3 className="text-warning mt-3">Simple,Fast and Powerfull</h3>
                    <p className="mt-3"><span className="fs-5">Play Everything : </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dicta repellat quasi, mollitia quod nobis aliquam </p>
                    <p className="mt-3"><span className="fs-5">Play Everything : </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dicta repellat quasi, mollitia quod nobis aliquam </p>
                    <p className="mt-3"><span className="fs-5">Play Everything : </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dicta repellat quasi, mollitia quod nobis aliquam</p>

              </div>
              <div className="col-md-6 ">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/aVKJrJbHUV0" title="แค่เธอ (Why Don&#39;t You Stay) (From KinnPorsche The Series)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
             </div>
          </div>

          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  );
}

export default Landingpage;
