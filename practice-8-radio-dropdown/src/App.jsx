import React , {useState} from 'react'
function App(){

  const [gender,setGender]=useState('female')
  const [city,setCity]=useState('Ayodhya');

  return(
    <>
    <h1>Handle Radio and dropdown in REACT JS</h1>
    <input checked={gender==='male'} onChange={(event)=>setGender(event.target.value)} type="radio" name="gender" id="male"value={"male"}/> 
    <label htmlFor="male">Male</label>
{/* name--- dono jagh same rkhna pdega nh to dono select ho jayega */}
{/* id--htmlFor ---same ekhte hai jisse input field and labell link ho jaye jisse male word pr bhi click krne se action ho */}
{/* value-- nh to neeche selected gender me on krke show kr rha tha ans */}

    <input  checked={gender==='female'} onChange={(event)=>setGender(event.target.value)} type="radio" name="gender" id="female" value={"female"}/>
    <label htmlFor="female">Female</label>
    <h2>Selected Gender : {gender}</h2>
    <br/>
    <br/>
    <br/>
    <h3>Select city</h3>
    <select onChange={(event)=>setCity(event.target.value)} defaultValue={"Ayodhya"}>

    <option value="Noida">Noida</option>
    <option value="Gurgaon">Gurgaon</option>
    <option value="Ayodhya">Ayodhya</option>
    </select>
    <h2>Selected City: {city}</h2>
   
    </>
  )
}

export default App;