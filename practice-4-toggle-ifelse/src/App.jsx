//TOGGLE OR HIDE AND SHOW IN REACT
// import React,{useState} from 'react';

// function App(){
   
//   const [display,setDisplay]=useState(false);

//   return(
//     <>
//     <h1>Toggle in REACT JS</h1>
//     <button onClick={()=>setDisplay(!display)}>Toggle</button>
//     {
//       display ?<h1>Ameesha Shukla</h1>:null
//     }
//     </>

//   )
// }

// export default App;



//multiple if-else condition use
import { useState } from "react";
function App(){

const [count,setCount]=useState(0);

  return(
       <>
       <h1>Counter:{ count}</h1>
       <button onClick={()=>setCount(count+1)}>Counter</button>
       {
          count===1 ?<h1>condition 1 </h1>
          :count===2?<h1>Condition 2</h1>
          :count===3?<h1>Condition 3</h1>
          :count===4?<h1>Condition 4</h1>
          :count===5?<h1>Condition 5</h1>
          :count===6?<h1>Condition 6</h1>
          :<h1>not defined</h1>
       }
       </>
  )
}

export default App;