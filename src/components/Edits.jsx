import React from 'react'
import { useState } from 'react'
import { Modal,Button } from 'react-bootstrap'
import OIP from '../assets/OIP.jpeg'


function Edits() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <button onClick={handleShow} className='btn'> <i className='fa-solid fa-edit me-1'></i></button>
   

  <Modal
    size='lg'
    centered
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>Edit Project Details</Modal.Title>
    </Modal.Header>
    <Modal.Body>
     <div className='row'>
     <div className='col-lg-4'>
     <label>
      <input type='file'style={{display:'none'}}></input>
      <img height={'200px'} width={'200px'} className='img-fluid' src={OIP}></img>
     </label>
     </div>
     <div className='col-lg-8'>
    <div className='mb-2'> <input type='text' className='form-control' placeholder='Project title'/></div>
    <div className='mb-2'> <input type='text' className='form-control' placeholder='Language3s used'/></div>
    <div className='mb-2'>  <input type='text' className='form-control' placeholder='Project Github Link'/></div>
    <div className='mb-2'> <input type='text' className='form-control' placeholder='Project Website Link'/></div>
     
     
     </div>

     </div>
     <div className=''>
     <input type='text' className='form-control' placeholder='project overview'/>
     </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary">Update</Button>
    </Modal.Footer>
  </Modal>
    </>
  )
}

export default Edits