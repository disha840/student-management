import React, { useEffect, useState } from 'react'

const Debouncing = () => {
    const [state,setState]=useState("");
    function changeHandler(e){
        setState(e.target.value)
    }
    useEffect(()=>{
      const timer=setTimeout(() => {
        console.log("api call");
        
      }, 1000);
      return ()=>{
        clearTimeout(timer)
      }
    },[state])
  return (
    <div>
        <form>
        <input type="text" onChange={changeHandler} value={state}  placeholder='enter value'/>
      </form>
    </div>
  )
}

export default Debouncing
