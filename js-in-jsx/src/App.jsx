function App(){
  //user variable wwith jsx
  const name="Ameesha"
  let x=10
  let y=20
  
  //html tags with jsx
  let path="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"

  const useobj={
    name:"Ameeshaa",
    age:24,
    city:"Ayodhya"
  }
  //user function with jsx
  function add( x, y=10){
     return x+y;
  }

  //condition inside JSX
  function operation(x,y,op){
    if(op=="+"){
      return x+y;
    }else{
      return x-y;
    }
  }
  const userArray=['Ami','Aman','rajat'];


  
  return(
    <div>
        <h1>JSX with curly Braces</h1>
        <h1>{name}</h1>
        <h1>{x+y}</h1>
        <h1>{add(10,10)}</h1>
        <h1>{operation(10,5,"+")}</h1>
        <h1>{useobj.name}</h1>
        <h1>{userArray[0]}</h1>
        <input type="text" value={name}/>
        <img src={path} alt="image"/>

    </div>
  )
}

export default App;