import React from 'react'
import Student from './Student'

function College({item}) {
  return (
    <div style={{backgroundColor:'pink',padding:'20px',borderBottom:"2px solid red", margin:'20px',borderRadius:'10px'}}>

<h1>Name:{item.name}</h1>
      <ul>
        <li>
          <h3>City:{item.city}</h3>
        </li>
        <li>
          <h3>Website:{item.website}</h3>
        </li>
        <li>
            <Student student={item.student}/>
        </li>
      </ul>
    </div>
  )
}

export default College