import React from 'react'
import {useSelector} from 'react-redux'

const ShowStudent = () => {
    const stud=useSelector((state)=> state.students.stud);
  return (
    <div>
        {stud.name}
      
    </div>
  )
}

export default ShowStudent
