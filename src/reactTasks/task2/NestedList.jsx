import React from "react";
import "./nestedlist.css"
import { useState } from "react";
export default function NestedList({ data }) {
  const [visible, setVisible] = useState({});

  const handleList = (name, childrenExists) => {
  
      setVisible({ ...visible, [name]:childrenExists });

  };
  console.log(visible);
  return (
    <div className="nestedlist">

    <div className="nestedListWrapper" style={{padding:"10px"}} >
      {data.map((val) => {
          return (
          <div key={val.name}>
            {val.childrenExists && (
                <button style={{width:"100px"}} onClick={() => handleList(val.name, val.childrenExists)}>
                {val.name}
              </button>
            )}
            {!val.childrenExists && <span>{val.name}</span>}
            <div style={{ display: !visible[val.name] && "none" }}>
              {val.children && <NestedList data={val.children} />}
            </div>
          </div>
        );
    })}
    </div>
    </div>
  );
}
