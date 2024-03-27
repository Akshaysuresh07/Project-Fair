// import { useState } from 'react';
// import { Card } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';




// function ProjectCard() {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow=()=>setShow(true)

//   return (
//    <>
//    <Card> 
//     </Card>
//     <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Project details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <div
//           className="row">
//           <div className="col-lg-6">
//           </div>
//           <div className="col-lg-6">
//           <h3>Project title</h3>
//           <h6><span className='fw-bolder'>Language used</span>: HTML,CSS,JS</h6>
//           <p style={{textAlign:'justify'}}><span className='fw-bolder'>Description :</span>naimKKBU8UvKnQFFFFA63LPZoUuDdrzdJMmPa7cpLIRCS17TKkKCSGm1ugpH4k9j3O2MjDretUm3vWi62KbJTD9omR7lbpbqVqjoltp8ItyPDBUEqHBxtzvjBCbEHpq6szUWw3KFcokORNRGnvNS2ZzTCdaw24hKVJWAM8Y3</p>
//           </div>
//         </div>
//         <div className='float-start mt-2'>
//         <a href=''><i cl></i></a>
//         <a href=''></a>
//         </div>
        
        
//         </Modal.Body>
//         <Modal.Footer>
         
//         </Modal.Footer>
//       </Modal>
//    </> 
   
//   )
// }

// export default ProjectCard
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
      

    <div className='d-flex gap-3'>
      
<Card onClick={handleShow} className='shadow-lg rounded' style={{ width: '18rem' }}>
      <Card.Img variant="top" src=''/>
      <Card.Body>
        
        <Card.Title className='text-center'>title</Card.Title>
       
      </Card.Body>
    
    </Card>
    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>title</Modal.Title>
        </Modal.Header>
        <Modal.Body className='p-2 '>
          <div className='row'>
            <div className='col-6'>
              <img className='rounded' width={'100%'} src=''></img>
            </div>
            <div className='col-6 '>
              <h4>Description</h4>
              <p className='text-start'></p>
              <p><span className='fw-bold'>Technolgies Used:</span>  {}</p>
            </div>
          </div>
          <div className='p-2 '>
            <hr />
            <a className='me-2' target='_blank' href='https://github.com/govindpg/Sky_savvy-wheather_app' ><i className="fa-brands fa-github fa-2xl text-black"></i></a>
            <a className='ms-2' target='_blank' href='https://skysavvy22.netlify.app/'><i className="fa-solid fa-link fa-2xl text-black"></i></a>
          </div>
        </Modal.Body>
        
      </Modal>
    

</div>

    

    
  )
}

export default ProjectCard