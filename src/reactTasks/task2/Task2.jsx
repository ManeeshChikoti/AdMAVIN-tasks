import React from "react";
import NestedList from "./NestedList";

export default function Task2() {
  const data = [
    {
      name: "1",
      childrenExists:true,
      children: [
        
        {
          name: "1.1",
          childrenExists:true,
          children: [
            { name: "1.1.1",
            childrenExists:false,
           },
             { name: "1.1.2",
             childrenExists:false,
             }
          ],
        },
      ],
    },
    {
      name: "2",
      childrenExists:true,
      children: [
        {
          name: "2.1",
          childrenExists:true,
          children: [
            { name: "2.1.1",
            childrenExists:false,
           },
             { name: "2.1.2",
             childrenExists:false,
             }
          ],
        },
      ],
    },
    {
      name: "3",
      childrenExists:true, 
      children: [
        {
          name: "3.1",
          childrenExists:true,
          children: [
            { name: "3.1.1",
            childrenExists:false,
           },
             { name: "3.1.2" ,
             childrenExists:false,
            }
          ],
        },
      ],
    },
  ];
  return (
    <div>
      <NestedList data={data}/>
    </div>
  );
}
