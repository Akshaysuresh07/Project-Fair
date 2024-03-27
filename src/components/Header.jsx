import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header({}) {
  return (
    <Navbar style={{zIndex:'10'}} expand="lg" className="bg-primary position-fixed  top-0 w-100">
    <Container fluid>
    <Navbar.Brand className='fs-4 fw-bolder' href="#">All project</Navbar.Brand>
  
   
     
      <Nav
          className="ms-auto pb-3   my-2 my-lg-0 "
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
   
        </Nav>
       
   
    </Container>
  </Navbar>
  )
}

export default Header