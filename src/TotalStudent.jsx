import React from 'react'
import { useSelector } from 'react-redux'


const TotalStudent = () => {
  const array=useSelector(state => state.students.array)

    
  return (
    <div>
      <div>
        <h1>total students: {array.length}</h1>
      </div>
       
      
    </div>
  )
}

export default TotalStudent
