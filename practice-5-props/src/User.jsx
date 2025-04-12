
// function User(props){
//   return (
//     <>
//     <h1>User Component</h1>

//     {/* props ek object deta hai to hume props ke andr se value nikalni hoti hai */}
//     <h1>{props.name}</h1> 
//     <h1>{props.age}</h1>

//    
//     </>
//   )
// }

// export default User;


// function User({name,age,gmail}){
//     return (
//       <>
//       <h1>User Component</h1>
  
//        {/* agr hum props ki value ko direct chahte hai in a child component ,props se bina nikale tb hum method2 use kr skte hai*/}
//       <h1>{name}</h1> 
//       <h1>{age}</h1>
//       <h1>{gmail}</h1>
  
     
//       </>
//     )
//   }
  
//   export default User;


function User({user}){
    return (
      <>
      <h1>User Component</h1>
  
       
      <h2>name:{user.name}</h2> 
      <h2>age:{user.age}</h2>
      <h2>mail:{user.email}</h2>
  
     
      </>
    )
  }
  
  export default User;