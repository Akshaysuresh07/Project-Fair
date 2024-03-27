import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Project from './pages/Project'
import Dashboard from './pages/Dashboard'

function App() {


  return (
    <>
     <h1 className='text-center'>Project</h1>
     <Routes>
     <Route path='/home' element={<Home/>}/>
     <Route path='/dashboard' element={<Dashboard/>}/>
     <Route path='/project' element={<Project/>}/>
     <Route path='/login' element={<Auth />}/>
     <Route path='/register' element={<Auth insideRegister/>}/>
     <Route path='/*' element={<Home/>}/>

     </Routes>
     
    </>
  )
}

export default App
