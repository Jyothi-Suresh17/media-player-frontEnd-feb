import { faFacebook, faGithub, faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import React from 'react'


function Footer() {
  return (
    <>
    <hr />
    <div className="container">
      <div className="row w-100">
        <div className="col-md-4 p-4 ms-md-5">
          <h4 className='text-warning' > <FontAwesomeIcon icon={faPlay}   size='1x'/>Media Player</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet, obcaecati distinctio recusandae nesciunt sunt perferendis consectetur odit. A repudiandae eveniet corporis pariatur nulla provident dolores illum reiciendis unde omnis?</p>
        </div>

        <div className="col-md-2 p-4 justify-content-center d-md-flex">
         <div>
         <h4>Links</h4>
        
          <p className='mt-4'> <Link to={'/'}>Landing Page</Link></p>
          <p><Link to={'/home'}>Home Page</Link></p>
          <p><Link to={'/watch-history'}>Watch History</Link></p>
         </div>
        </div>

        <div className="col-md-2 p-4">
          <h4>Guides</h4>
          <p>React</p>
          <p>React Bootstrap</p>
          <p>Bootstrap</p>
        </div>

        <div className="col-md-3 p-4">
          <h4>Contact Us</h4>
          <div className="d-flex mt-4">
            <input type="text" className='form-control' placeholder='Email Id' />
            <button className="btn btn-warning ms-3">Subscribe</button>
            
          </div>

          <div className='d-flex justify-content-between mt-3'>
          <FontAwesomeIcon icon={faFacebook} size='2xl'/>
          <FontAwesomeIcon icon={faLinkedin}  size='2xl' />
          <FontAwesomeIcon icon={faGithub}  size='2xl' />
          <FontAwesomeIcon icon={faInstagram}  size='2xl' />

          </div>
        </div>

        <div className="col-md-1"></div>
      </div>
    </div>
    </>
  )
}

export default Footer