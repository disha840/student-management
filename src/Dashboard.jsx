import React from 'react'
import Present from './Present'
import Absent from './Absent'
import TotalStudent from './TotalStudent'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate=useNavigate();
  return (
    <>
    <div className='flex h-screen'>
        <div className='outline-1 w-1/4 h-full flex flex-col gap-10 '>
        <button className='outline-1 p-5' >Dashboard</button>
        <button className='outline-1 p-5' onClick={()=> navigate('/student')} >students</button>
        <button className='outline-1 p-5' onClick={()=> navigate('/addstudent')}>Add Students</button>
        <button className='outline-1 p-5' onClick={()=>navigate('/users')}>User API</button>
        </div>
        <div className='outline-1 w-3/4 h-full'>
        <div className='flex justify-between h-1/8 outline-1 items-center'>
            <h1>Student dashboard</h1>
            <button className='outline-1 rounded-lg h-7'>log out</button>
        </div>
        <div  className='flex p-20 justify-around'>
          <TotalStudent/>
          <Present/>
          <Absent/>

        </div>
        
    

        </div>
      
    </div>
    </>
  )
}

export default Dashboard
