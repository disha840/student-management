import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate=useNavigate()
    const [form,setform]=useState({});
    const [formerr,setErr]=useState({})
    function changeHandler(e){
        const {name,value}=e.target;
        setform({...form,
            [name]:value
        })
    }
    function errorcheck(){
        const err={};
        if(!form.email){
            err.email="enter a email";
        }
        
        if(!form.password){
            err.password="enter a password";

        }
        return err;
    }
    function submitHandle(e){
        e.preventDefault();
        const error=errorcheck();
        setErr(error)
        if(Object.keys(error).length==0){
            localStorage.setItem("isLogIn","true");
           navigate("/dashboard")
        }
        
    }


  return (
    <>
    <div className='flex justify-center h-screen items-center'>
      <form onSubmit={submitHandle} className='flex flex-col outline-2 w-1/4 gap-10 h-1/2 p-5'>
       <label htmlFor="email">{formerr.email && <p>{formerr.email}</p>} email:
         <input type="email" name='email' id='email' onChange={changeHandler} className='outline-1' />
       </label>
       <label htmlFor="passw"> {formerr.password && <p>{formerr.password}</p>} password:
        <input type="password" name='password' id='passw' onChange={changeHandler} className='outline-1' />
       </label>
       <input type="submit" name="" id="" className='outline-1 rounded-xl' />
      </form>
    </div>
    </>
  )
}

export default Login
