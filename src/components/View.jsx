import React from 'react'
import Edit from '../components/Edits'
import Add from '../components/Add'

function View() {
  return (
    <>
      <div className='d-flex mt-3 justify-content-between w-100'>
        <h2>All projects</h2>
        <div className='btn' ><Add/></div>

      </div>
      <div className='d-flex justify-content-between border p-2 rounded'>
        <h3>Project Title</h3>
        <div className='icons d-flex'>
          <div className='btn'><Edit/>
          </div>
          <div className='btn'><a href='' target='blank'><i className='fa-brands fa-github'></i></a></div> 
          <button className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
          </div>

      </div>
    </>
  )
}

export default View