import React, { useRef } from 'react'

const Throttling = () => {
    const prevTime=useRef(0);
    function clicking(){
        const now=Date.now();
        if(now-prevTime.current>=2000){
            console.log("run run");
            prevTime.current=now;
        }
    }
  return (
    <div>
        <button onClick={clicking}>click me</button>
      
    </div>
  )
}

export default Throttling
