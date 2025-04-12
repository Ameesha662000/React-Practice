// import React,{useState} from 'react'
// function App(){
// const [val,setValue]=useState("")

//   return(
//     <>
//     <h1>Get Input field Value</h1>
//     <input type="text" value={val} placeholder="Enter user name" onChange={(event)=>setValue(event.target.value)}/>
//     <h1>{val}</h1>
//     <button onClick={()=>setValue("")}>Clear val</button>
//     </>
//   )
// }

// export default App;
import React,{useState} from 'react'

function App(){
  const [name,setName]=useState("");
  const [mail,setMail]=useState("");
  const [no,setNo]=useState("");

  const handleClear=()=>{
    setName("");
    setMail("");
    setNo("");
  }
  return(
    <>
    <h1>Get Input Fields on UI</h1>
    <input type="text" placeholder="Enter user Name" value={name} onChange={(event)=>setName(event.target.value)}/>
    <br/>
    <input type="text" placeholder="Enter mail" value={mail} onChange={(event)=>setMail(event.target.value)}/>
    <br/>
    <input type="text" placeholder="Enter rollno" value={no} onChange={(event)=>setNo(event.target.value)}/>
    <br/>
    <h1>{name}</h1>
    <h1>{mail}</h1>
    <h1>{no}</h1>
    <button onClick={handleClear}>Clear value</button>
    </>
  )
}

export default App;