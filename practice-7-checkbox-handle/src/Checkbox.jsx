import React,{useState} from 'react';
function Checkbox(){

    const [skills,setSkills]=useState([""]);
    const handleSkills=(event)=>{
        console.log(event.target.value,event.target.checked);
    if(event.target.checked){
        // setSkills(event.target.value);//ek ek value show ho rhi 
        //humko sari value sath chiye
        setSkills([...skills,event.target.value]);

    }else{
        setSkills([...skills.filter((skill)=>skill!=event.target.value)])//isse value filter ho rhi jo unchecked krrhe vo htt ja rhi
    }
 }
    return (
      <>
      <h3>Select your skills</h3>
      <input onChange={handleSkills} type="checkbox" id="php" value="php"/>
      <label htmlFor="php">PHP</label>
      <br/>

      <input onChange={handleSkills} type="checkbox" id="js" value="js"/>
      <label htmlFor="js">JS</label>
      <br/>

      <input onChange={handleSkills} type="checkbox" id="node" value="node"/>
      <label htmlFor="node">NODE</label>
      <br/>

      <input onChange={handleSkills} type="checkbox" id="reactjs" value="reactjs"/>
      <label htmlFor="reactjs">REACT JS</label>
     <h1>{skills.toString()}</h1>
      </>
    )
}

export default Checkbox;