import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { Row,Col } from 'react-bootstrap'

 
function Home() {
  return (
    <>
    <Header/>
 {   // <div style={{marginTop:'110px'}} className='text-center'>Home</div>
    // <div className='conatiner-fluid'>
    // <div className='mt-5' style={{marginLeft:'600px'}}>
    // <h1>Project Fair</h1>
    // <button className='btn btn-primary'>Get Started</button>
    // </div>

    // <div className='d-flex justify-content-center '></div>
    // </div>
    }
    <div style={{ width: "100%", height: "100vh", backgroundColor: "white" }}>
        <div className="container-fluid">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-6 ccol-sm-12 justify-content-center d-flex align-item-center">
              <div>
                <h1 className="fs-1">Project Vista</h1>
                <p>One stop destination for all porject needs</p>
                (
                  <button className="btn btn-success">
                    <Link to={"/dashboard"}>manage projects</Link>
                  </button>
                ) : (
                  <button className="btn btn-success">
                    <Link to={"/login"}>Get started</Link>
                  </button>
                )
              </div>
            </div>
            <div className="col-lg-6 col-md-12 justify-content-center d-flex align-item-center ">
              <img width={"90%"} src='' alt="no image"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 ">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <h3 className="mb-3">Explore our Projects</h3>
          <Row>
           
              <Col md={6}>
                <ProjectCard />
              </Col>
            ))
          </Row>

          <div className="mt-3" >
            See more projects
          </div>
        </div>
      </div>
    <Footer/>
  
    </>
    )
}

export default Home