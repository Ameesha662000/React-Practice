// function App(){
// const userName=['anil','sam','ami','aman']

// //array of objects
// const userData=[
//   {
//     id:101,
//     name:'anil',
//     age:23,
//     cllg:'NIT'
//   },
//   {
//     id:102,
//     name:'ami',
//     age:24,
//     cllg:'MIT'
//   },
//   {
//     id:103,
//     name:'sanil',
//     age:25,
//     cllg:'NNIT'
//   },
//   {
//     id:104,
//     name:'sunil',
//     age:23,
//     cllg:'VIT'
//   },
//   {
//     id:105,
//     name:'Shweta',
//     age:23,
//     cllg:'NIT'
//   }
// ]

//   return(
//     <>
   
//     <h1>JSX Loop with Map in React js</h1>
//     <table border={"1px solid black"}>
//       <thead>
//         <tr>
//           <td>ID</td>
//           <td>Name</td>
//           <td>Age</td>
//           <td>college</td>
          
//         </tr>
//       </thead>
//       <tbody>
//         {
//           userData.map((user)=>(
//             <tr>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.age}</td>
//               <td>{user.cllg}</td>            </tr>
//           ))
//         }
//       </tbody>
//     </table>
   
//    <br/>
//    <br/>
   
//     <table border={"1px solid black"}>
//       <thead>
//         <tr>
//           <td>ID</td>
//           <td>Name</td>
//           <td>Age</td>
//           <td>college</td>
          
//         </tr>
//       </thead>
//       <tbody>

//       </tbody>
//     </table>
//     </>
//   )
// }

// export default App;

// // ye error aata hai hum jo map function use krte hai ur key nh dete 
// // hook.js:608 Each child in a list should have a unique "key" prop.

// // Check the render method of `App`. See https://react.dev/link/warning-keys for more information.
import User from "./User";
function App(){


  const userData=[
      {
        id:101,
        name:'anil',
        age:23,
        cllg:'NIT'
      },
      {
        id:102,
        name:'ami',
        age:24,
        cllg:'MIT'
      },
      {
        id:103,
        name:'sanil',
        age:25,
        cllg:'NNIT'
      },
      {
        id:104,
        name:'sunil',
        age:23,
        cllg:'VIT'
      },
      {
        id:105,
        name:'Shweta',
        age:23,
        cllg:'NIT'
      }
    ]

  return(
    <>
    <h1>Reuse component in Loop</h1>

    {
      userData.map((user)=>(
        <div key={user.id}>
          <User data={user} />
        </div>
      ))
    }
    </>
  )
}

export default App;