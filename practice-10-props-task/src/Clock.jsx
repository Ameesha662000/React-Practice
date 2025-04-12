import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Clock({color}) {

    const [time ,setTime]=useState(0)
    
    useEffect(()=>{
     setInterval(()=>{
       setTime(new Date().toLocaleTimeString());
     },1000);
    },[])
  return (
    <div>
        <h1
        style={{color:color,background:'pink',width:'150px',borderRadius:'8px'}}
        >{time}</h1>
        
    </div>
  )
}

export default Clock