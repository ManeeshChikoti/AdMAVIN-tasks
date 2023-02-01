import React, { useState } from 'react'
import "./task5.css";


export  function CreateSquares() {
  const squares  = ["Square1", "Square2", "Square3", "Square4"];
 
  return (
    <div className="squareWrapper">
    {squares.map((val) => (
        <Square val={val}  key={val } />
      ))}
    </div>
  )
}

const Square=({val})=>{
  const [click,setClick]=useState(false);
  const handleDiv=()=>{
    setClick(true)
  }
  return(
    <div className={val} onClick={handleDiv}>
    {click&&<CreateSquares/> }
    </div>
  )
}
export default function Task5() {
  const [isClick, setIsClick] = useState(false);
  const[squareCount,setSquareCount]=useState(1);
  const handleClick=()=>{
    setIsClick(true);
    setSquareCount((prev)=>prev+4);
   
  }
  return (
    <div className='Task5'>
      <h1>Total Squares:{squareCount}</h1>
        <div onClick={handleClick} className="wrapper">
           {isClick &&<CreateSquares/>}
        </div>     
    </div>
  )
}
