import React from 'react'
import { useSelector } from 'react-redux'
const Absent = () => {
     const array=useSelector((state)=> state.students.array);
        const  presenet=array.filter((student)=>(
            student.attaindence==false
        ))
  return (
    <div>
         <div className='h-10 outline-1 rounded-lg'>
            <h1>total Absent: {presenet.length}</h1>
        </div>
      
    </div>
  )
}

export default Absent
