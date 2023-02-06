import React, { useEffect } from "react";
import { useState } from "react";
import "./task4.css";

const Square = ({num,index,setScore,setPoints,setPointsLost}) => {

    const handleClick=( )=>{
        if(num===index){
          setScore((prev)=>prev+5);
          setPoints((prev)=>(prev+1));
         
        }
        else{
            setScore((prev)=>prev-2.5);
            setPointsLost((prev)=>(prev+1));
        }
    
    }
  return <div className="items"   onClick={handleClick}>
    {num===index&&(<h1 >HIT</h1>)}
  </div>;
};

export default function Task4() {
  const [index, setIndex] = useState(0);
  const [score,setScore]=useState(0);
   const[pointsGain,setPoints]=useState(0)
  const[pointsLost,setPointsLost]=useState(0)
 
  const [finished,setFinished]=useState(false);

  useEffect(() => {
    const indexRandom = setInterval(() => {
      const i = Math.floor(Math.random() * 9 + 1);
      setIndex(i);
    }, 1000);

    setTimeout(() => {
        setFinished(true);
        clearInterval(indexRandom);
        setIndex(0)
      }, 60000);

    return () => clearInterval(indexRandom);
  }, []);

  return (
    <div className="Task4"> 
        <h2>Score:{score},rightCount:{pointsGain},WrongCount:{pointsLost}</h2>
       {!finished?
        <div className="game">
      {
        [...Array(9)].map((num,i)=>{
        return  <Square num={i+1}key={i}  index={index}  setScore={setScore} setPoints={setPoints} setPointsLost={setPointsLost}/>
         })
      }
    </div>
      :<h3>Game Finished!!!</h3>}
    </div>
  );
}

// removed  repetitive code

    //    (
    //   <div className="gameWrapper">
    //     <div className="row">
    //  {
    //     [...Array(3)].map((num,i)=>{
    //       console.log(i)
    //      return  <Square num={i+1}key={i}  index={index}  setScore={setScore} setPoints={setPoints} setPointsLost={setPointsLost}/>
    //     })
    //  }
    //     </div>
    //     <div className="row">
    //     <Square num={4}  index={index}  setScore={setScore} setPoints={setPoints} setPointsLost={setPointsLost}/>
    //      <Square num={5}  index={index}  setScore={setScore}  setPoints={setPoints} setPointsLost={setPointsLost}/>
    //      <Square num={6}  index={index}  setScore={setScore} setPoints={setPoints} setPointsLost={setPointsLost}/>
    //     </div>
    //     <div className="row">
    //     <Square num={7}  index={index}  setScore={setScore}  setPoints={setPoints} setPointsLost={setPointsLost}/>
    //      <Square num={8}  index={index }  setScore={setScore}  setPoints={setPoints} setPointsLost={setPointsLost}/>
    //      <Square num={9}  index={index}  setScore={setScore}  setPoints={setPoints} setPointsLost={setPointsLost}/>
    //     </div>
    //   </div>)

