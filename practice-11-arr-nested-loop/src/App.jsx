import College from "./College";

function App(){
  const collegeData=[
    {
      name:"IET",
      city:"ALwar",
      website:"www.iet.gmail.com",
      student:[
        {
          name:"Ami",
          age:23,
          mail:"anil.com"
        },
        {
          name:"Amisha",
          age:25,
          mail:"amisha.com"
        },
        {
          name:"shweta",
          age:25,
          mail:"shweta.com"
        }
      ]
    },
    {
      name:"IIT",
      city:"Delhi",
      website:"www.iit.com",
      student:[
        {
          name:"Ami",
          age:23,
          mail:"anil.com"
        },
        {
          name:"Amisha",
          age:25,
          mail:"amisha.com"
        },
        {
          name:"shweta",
          age:25,
          mail:"shweta.com"
        }
      ]
    },
    {
      name:"NIT",
      city:"Raipur",
      website:"www.nit.com",
      student:[
        {
          name:"Ami",
          age:23,
          mail:"anil.com"
        },
        {
          name:"Amisha",
          age:25,
          mail:"amisha.com"
        },
        {
          name:"shweta",
          age:25,
          mail:"shweta.com"
        }
      ]
    }
  ]
  return(
    <>
<h1>Nested looping with component</h1>
{
  collegeData.map((item,index)=>(
    <div key={index}>
     <College item={item}/>
    </div>
  ))
}
    </>
  )
}

export default App;