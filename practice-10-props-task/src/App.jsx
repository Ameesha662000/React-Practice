import React from 'react'
import Clock from './Clock'
import { useState } from 'react'

function App() {
  const [color,setColor]=useState('green')
  return (
    <div style={{backgroundColor:'skyblue'}}>
      <h1>App component</h1>
      <select onChange={(event)=>setColor(event.target.value)}>
        <option value={"red"}>Red</option>
        <option value={"green"}>Green</option>
        <option value={"blue"}>Blue</option>
        <option value="orange">Orange</option>
      </select>
      <Clock color={color}/>

    </div>
  )
}

export default App