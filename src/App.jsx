import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import Protected from './Protected'
import Addstudent from './Addstudent'
import Students from './Students'
import Users from './Users'
import ShowStudent from './ShowStudent'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/addstudent' element={<Addstudent/>} />
        <Route path='student' element={<Students/>} />
        <Route path='/users' element={<Users/>}/>
        <Route path='showstudent' element={<ShowStudent/>} />

        <Route path='/dashboard' element={
          <Protected>
          <Dashboard/>
          </Protected>}/>
      </Routes>
      </BrowserRouter> 
      
      
  
    </div>
  )
}

export default App
