import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';
import profileImg from '../assets/profileImg.jpeg'


function Profile() {
  const [open, setOpen] = useState(false);
  return (
    <>
    <div className='d-flex justify-content-between'>
    <h3>user profile</h3>
    <buttom onClick={() => setOpen(!open)}
    aria-controls="example-collapse-text"
    aria-expanded={open} className='btn-text fw-bolder text-warning'><i className="fa-solid fa-chevron-down"></i> </buttom>
    </div>
    <Collapse in={open} dimension="width">
          <div className=' shadow' id="example-collapse-text">
           <label>
           <input type='file' style={{display:'none'}}/>
           <img width={'200px'} height={'200px'} className='rounded-circle' src={profileImg}/>
     
           </label>
          <div className='mb-4'>
           <input className='form-control' placeholder='github url'/>
           </div>
           <div className='mb-4'>
           <input className='form-control' placeholder='LinkedIn url'/>
           </div>
    
         
             
          </div>
        </Collapse>
    </>
  )
}

export default Profile