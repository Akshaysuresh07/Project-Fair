import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Auth({ insideRegister }) {
  const [userInput, setuserInput] = useState({
    username: '', email: '', password: ''
  })
  console.log(userInput);
  const handleRegister=(e)=>{
    e.preventDefault()
    if(userInput.username&&userInput.email&&userInput.password=='')
      {
        toast.warning('fill it completely')
      }

  }
  return (
    <>\
      <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center'>

        <div className='container w-75'>
          <Link to={'/'} style={{ textDecoration: 'none' }} className='fw-bolder'>Back to home</Link>
          <div className='card shadow p-5'>

            <div className='row'>
              <div className='col-lg-6'>
                <img className='w-100' src='https://th.bing.com/th/id/OIP.AOceGJ7ibJAfchQSS3_qfwHaHa?w=191&h=190&c=7&r=0&o=5&dpr=1.4&pid=1.7' alt='' />
              </div>
              <div className='col-lg-6'>
                {insideRegister ? <h2>register to continue</h2> : <h2>Login</h2>}
                {insideRegister && <FloatingLabel
                  controlId="floatingInput"
                  label="username"
                  className="mb-3"
                >
                  <Form.Control value={userInput.username} onChange={(e) => setuserInput({ ...userInput, username: e.target.value })} type="text" placeholder="username" />
                </FloatingLabel>}
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control value={userInput.email} onChange={(e) => setuserInput({ ...userInput, email: e.target.value })} type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control value={userInput.password} onChange={(e) => setuserInput({ ...userInput, password: e.target.value })} type="password" placeholder="Password" />
                </FloatingLabel>
                {insideRegister?<button onClick={handleRegister}style={{width:'190px'}} className='btn btn-danger mt-3'>Register</button>:
                <button style={{width:'190px'}} className='btn btn-danger mt-3'>Login</button>
              }
               {insideRegister? <h5>alredy registered Login </h5>:<h5>not a registerd user  <span className='text-warning'>Register</span></h5>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </>

  )
}

export default Auth