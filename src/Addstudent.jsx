import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addStudent } from './StudentSlice';
import { useNavigate } from 'react-router-dom';


const Addstudent = () => {
    const navigate=useNavigate()
    const [form,setForm]=useState({
        id:Date.now(),
        attaindence:null

    });
    const dispatch=useDispatch();
    function changeHandle(e){
        const {name,value}=e.target;
        setForm({...form,
            [name]:value
        })
    }
    function submitForm(e){
          e.preventDefault();
        dispatch(addStudent(form));
        navigate('/dashboard')

    }

  return (
    <div className='flex justify-center h-screen items-center'>
        <form className='flex flex-col outline-2 w-1/4 gap-3 h-1/2 p-5' onSubmit={submitForm}>
            <input type="text" name='name' placeholder='enter your name' className='outline-1' onChange={changeHandle} />
            <input type="email" name='email' placeholder='enter your email' className='outline-1' onChange={changeHandle} />
            <select name="cource" id="" className='outline-1' onChange={changeHandle}>
                <option value="react">react</option>
                <option value="next-js">next-js</option>
                <option value='monglodb'>mongo</option>
            </select>
            <input type="text" name="marks" id=""  placeholder='enter your marks' className='outline-1' onChange={changeHandle}/>
            <input type="submit" className='outline-1 rounded-xl' />
        </form>
      
    </div>
  )
}

export default Addstudent
