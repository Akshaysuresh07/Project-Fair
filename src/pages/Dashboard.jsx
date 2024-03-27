import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import View from '../components/View'
import Profile from '../components/Profile'
function Dashboard() {
  return (
  <>
  <Header/>
  <div style={{marginTop:'100px'}}  className='container-fluid'>
    <h1>Welcome <span className='text-warning'>user</span></h1>
    <div
      className="row">
      <div className="col-lg-8">
      <View/>
      </div>
      <div className="col-lg-4 ">
      <Profile/>
      </div>
    </div>
    
  </div>
  <Footer/>
  </>
  )
}

export default Dashboard