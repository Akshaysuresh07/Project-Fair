import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'

function Project() {
  // {  <Header/>
  // <div style={{marginTop:'150px'}} className='container-fluid'>
  //    <div className='d-flex justify-content-center'>
  //    <h1>All project</h1>
  //    <input className='form-control w-25' type='text'  ></input>
     
  //    </div>
  //    <Row>
  //    <Col sm={12} md={6} lg={4}>
  //      <ProjectCard/>
  //    </Col>
  //    </Row>
  // </div>}
  return (
    <>
 
  <div>
  <Header/>
  
    <div className='container-fluid d-flex flex-column mb-5 mt-5 '>
    <h2 className='text-center'>All Projects</h2>
  <div className='d-flex mt-3 justify-content-center'>
<input className='form-control w-25  ' value= '' placeholder='search the project using tecnlogy'/>
<button className='btn btn-outline border border-2  ms-2'>Search</button>

  </div>
  <Row>
                <Col lg={3} md={2} sm={1} className='mt-3 d-flex justify-content-center' md={6} lg={4} sm={12}>   <ProjectCard   /></Col>
            
                <div>
                  <p className='text-center mt-3 fs-3'>sorry there is no such project</p>
                  <div className='d-flex justify-content-center flex-column'>
                  <img src='https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-30-710_512.gif' width={'200px'} height={'200px'}></img>
                  <p>Please <Link to={"/login"}>login</Link> to see more</p>
                </div>
                </div>
                

                
              

          </Row>
  </div>
  
  
</div>
    </>
  )
}

export default Project