import React from 'react'

function Student({student}) {
  return (
    <div>
        <h4>Student Component</h4>
        <h3>Students</h3>
            {
                student.map((student)=>(
                    <ul>
                         <li>Name:{student.name}</li>
                    </ul>
                       
                    
                ))
            }

    </div>
  )
}

export default Student