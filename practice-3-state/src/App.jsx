//react js tbhi kam krta hai means tbhi UI update krta hai jab component re-render hota hai
//jb change krna ho value ka to state ka  use krte hai


//State is a container that stores the data like variable 
//State is dynamic and mutable
//We have to import it when we want to use it 
//It rerender component automatically so that data can be visible on UI

//jb varible ka use krte hai to vo UI pr show nh hotachange krne ke bad bcz react rerender pr show krta hai

// function App(){
//  let fruit="Apple";
//   //I want to change fruit name from apple to mango, it only change on console
//   const handlefruit=()=>{
//     fruit="Mango";
//     console.log(fruit);
//   }

//   return(
// <>
// <h1>State in React js</h1>
// <button onClick={handlefruit}>Change Fruit Name</button>
// </>
//   )
// }

// export default App;

import React,{useState} from 'react';
function App(){
  const [fruit,setFruit]=useState("Apple");
  const [count,setCount]=useState(0);
function handleFruit(){
  setFruit("Mango");
  console.log(fruit);
  }

  function Counter(){
    setCount(count+1);
    console.log(count);
  }

  return (
<>
<h1>State in React JS--{fruit}</h1>
<h1>Counter:{count}</h1>
<button onClick={handleFruit}>Change fruit name</button>
<button onClick={Counter}>Counter :{count}</button>
</>
  )
}

export default App;