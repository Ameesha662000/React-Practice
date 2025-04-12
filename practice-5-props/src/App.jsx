//----------------Static props send krrhe hai-------------------

// import User from "./User";

// function App(){

// let name="Ameesha"
  // let age=24
  // let email="ameesha@gmail" 
  
//   return(
//     <>
//     <h1>Props in React JS</h1>
//     <User name="Ameesha" age={24} email={"ameesha@gmail.com"}/>
//      {/* <User name={name} age={age} gmail={email}/> */}    
// {/* ye to static props hum send krrhe  */}
//     </>
//   )
// }

// export default App;


//----------------Dynamic props send krte hai--------------------
import College from "./College";
import User from "./User";
function App(){
    let userObj={
      name:"Ameesha",
      age:24,
      email:"ameesha@gmail.com"
    }

    let userObj2={
      name:"Ame",
      age:25,
      email:"ameesha2@gmail.com"
    }

    let userObj3={
      name:"Shweta",
      age:26,
      email:"ameesha3@gmail.com"
    }
  
let collname=['IET','DU','IIT','NIT','MIT'];

  return(
    <>
    <h1>Props in React JS</h1>
    <hr/>
    <College names={collname}/>
    
    <User user={ userObj}/>
    <hr/>
    <User user={ userObj2}/>
    <hr/>
    <User user={ userObj3}/>
    {/* ye to dynamic props hum send krrhe  */}
    <hr/>
    
    </>
  )
}

export default App;




// --------------pass jsx with props------------------------- 