function App() {
  
  // Named function to show an alert message
  function callFun() {
    alert("Hello! this is alert msg!!");
  }

  // Arrow function that shows an alert about fruit
  const Fruit = () => {
    alert("Hello! this is Apple");
  }

  // Arrow function that takes a parameter and shows an alert with game name
  const Game = (game) => {
    alert("Hello!! this is a " + game);
  }

  return (
    <div>
      <h1> Click event and function Call </h1>

      {/* Button1: Calls callFun() when clicked */}
      <button onClick={callFun}>Button1</button>

      {/* Don't use callFun() inside onClick directly with () 
          because it will call the function immediately during render */}

      {/* Button2: Uses an inline function to show a second alert message */}
      <button onClick={function callFun2() {
        alert("Hello! this is  second alert msg!!");
      }}>
        Button2
      </button>

      {/* Button3: Calls the Fruit arrow function when clicked */}
      <button onClick={Fruit}>Button3</button>

      {/* Button4: Calls Game function with "Chess" as an argument using arrow function */}
      <button onClick={() => { Game("Chess") }}>Button4</button>
    </div>
  )
}

export default App;
