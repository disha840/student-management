import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { madeAttaindence } from './StudentSlice';
import { deleteStudent } from './StudentSlice';
import {viewStudent} from './StudentSlice'
import { useNavigate } from 'react-router-dom';
const Students = () => {
    const [state,setState]=useState("")
    const [searched,setSearched]=useState(null)
    const navigate=useNavigate()
    const dispatch=useDispatch();
    const selector=useSelector(state => state.students.array);
    function handleAttaindence(id,attaindence){
        dispatch(madeAttaindence({
            id,attaindence
        }))
    }
    function deleteST(id){
        dispatch(deleteStudent(id))

    }
    function viewpage(id){
        dispatch(viewStudent(id))
        navigate('/showstudent')
    }
    function searching(e){
        e.preventDefault();
        const stud=selector.filter((st)=>(
            st.name.toLowerCase()==state.toLowerCase()
        ))
        setSearched(stud)
    }
  return (
    <>
     <form  onSubmit={searching}>
        <input type="text" placeholder='enter' onChange={(e)=> setState(e.target.value)} />
        <input type="submit" name="" id="" />
    </form>
    {searched? <table className='outline-1 w-2/3'>
                 <thead>
            <tr>
                <td>name</td>
                <td>email</td>
                <td>cource</td>
                <td>marks</td>
                <td>attaindence</td>
                <td>actions</td>
            </tr>
        </thead>
        <tbody>
             {searched.map((val)=>(
                <tr key={val.id}>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.cource}</td>
                    <td>{val.marks}</td>
                    <td>
                        <button className='outline-1' onClick={()=> handleAttaindence(val.id,true)}>present</button>
                        <button  className='outline-1' onClick={()=> handleAttaindence(val.id,false)}>absent</button>
                    </td>
                    <td  className='flex gap-1'>
                        <button  className='outline-1' onClick={()=> viewpage(val.id)}>view</button>
                        <button  className='outline-1'>edit</button>
                        <button  className='outline-1' onClick={()=> deleteST(val.id)}>delete</button>
                    </td>

                </tr>
            ))}
            
        </tbody>
            </table>:<table className='outline-1 w-2/3'>
        <thead>
            <tr>
                <td>name</td>
                <td>email</td>
                <td>cource</td>
                <td>marks</td>
                <td>attaindence</td>
                <td>actions</td>
            </tr>
        </thead>
        <tbody>
            {selector.map((val)=>(
                <tr key={val.id}>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.cource}</td>
                    <td>{val.marks}</td>
                    <td>
                        <button className='outline-1' onClick={()=> handleAttaindence(val.id,true)}>present</button>
                        <button  className='outline-1' onClick={()=> handleAttaindence(val.id,false)}>absent</button>
                    </td>
                    <td  className='flex gap-1'>
                        <button  className='outline-1' onClick={()=> viewpage(val.id)}>view</button>
                        <button  className='outline-1'>edit</button>
                        <button  className='outline-1' onClick={()=> deleteST(val.id)}>delete</button>
                    </td>

                </tr>
            ))}
        </tbody>
    </table>  }
   
    
       

    </>
  )
}

export default Students


 