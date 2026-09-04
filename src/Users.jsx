import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {users} from './UserSlics'

const Users = () => {
    const {loading,data,error}=useSelector((state)=> state.users);
    const [sorted,setsorted]=useState(false)
    const [array,setarray]=useState([])
    const dispatch=useDispatch()   
        useEffect(()=>{ 
            dispatch(users())

        },[dispatch])
    if(loading){
        return <h1>loading...</h1>
    }
    if(error){
        return <h1>{error}</h1>
    }
    function sortData(){
       const arr=[...data].sort((a,b)=>(
            a.name.localeCompare(b.name)

        ))
        setarray(arr)
        setsorted(true)
    }
  return (
    <div> 
        <div>
            {sorted? array.map((val)=>(
                <p key={val.id}>{val.name}</p>
            ))  : 
            data.map((val)=>(
                <p key={val.id}>{val.name}</p>
            ))} 
        </div>
        <button onClick={sortData}>sorting data</button>
      
    </div>
  )
}

export default Users
