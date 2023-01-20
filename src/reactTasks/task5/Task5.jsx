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
  const handleClick=()=>{
    setIsClick(true);
   
  }
  return (
    <div className='Task5'>
        <div onClick={handleClick} className="wrapper">
           {isClick &&<CreateSquares/>}
        </div>     
    </div>
  )
}
