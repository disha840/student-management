import React from 'react'
import { useSelector } from 'react-redux'

const Present = () => {
    const array=useSelector((state)=> state.students.array);
    const  presenet=array.filter((student)=>(
        student.attaindence==true
    ))
  return (
    <div>
       <div className='ouline-1 rounded-lg'>
            <h1>total present: {presenet.length}</h1>
        </div>
    </div>
  )
}

export default Present
