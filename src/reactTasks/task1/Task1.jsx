import React from "react";
import { useState } from "react";
import List from "./List";
import "./task1.css";

export default function Task1() {
  const [bucket1, setBucket1] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 5",
  ]);
  const [bucket2, setBucket2] = useState(["Item 4", "Item 6"]);
  const [select, setSelect] = useState([]);
  let tempBucket1 = [...bucket1];
  let tempBucket2 = [...bucket2];
  //for testing console.log(select);

  const handleAdd = () => {
    select.map((val) => {
      if (bucket1.includes(val) && bucket2.includes(val)) {
        return null;
      } else if (bucket2.includes(val)) {
        return setBucket1((prev) => [...prev, val]);
      } else {
        return setBucket2((prev) => [...prev, val]);
      }
    });
    setSelect([]);
  };
  const handleRemove = () => {
  
    select.map((val) => {
      if (tempBucket1.includes(val) && tempBucket2.includes(val)) {
        tempBucket1 = tempBucket1.filter((data) => data !== val);
        tempBucket2 = tempBucket2.filter((data) => data !== val);

        return {
          Bucket1: setBucket1(tempBucket1),
          Bucket2: setBucket2(tempBucket2),
        };
      } else if (tempBucket1.includes(val)) {
        tempBucket1 = tempBucket1.filter((data) => data !== val);
        return setBucket1(tempBucket1);
      } else {
        tempBucket2 = tempBucket2.filter((data) => data !== val);
        return setBucket2(tempBucket2);
      }
    });

    setSelect([]);
  };

  const handleAddall = (num) => {
    if (num === 1) {
      setBucket2([...new Set(bucket2.concat(bucket1))]);
    } else {
      setBucket1([...new Set(bucket1.concat(bucket2))]);
    }
  };
  const handleRemoveall = (num) => {
  
    if (num === 1) {
      bucket1.map((val) => {
         return tempBucket2 = tempBucket2.filter((item) => item !== val);

      });
      setBucket2(tempBucket2)
    } else {
      bucket2.map((val) => {
        return tempBucket1= tempBucket1.filter((item) => item !== val);
      });
      setBucket1(tempBucket1)
    }
  };
  return (
    <div className="task1">
      <div className="left">
        <ul className="ul">
          {bucket1.map((item, i) => (
            <List item={item} key={i} setSelect={setSelect} select={select} />
          ))}
        </ul>
      </div>
      <div className="center">
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>Remove</button>
        <div className="addOrRemoveAll">
          <span> Add all </span>
          <div className="optionWrapper">
            <span className="options" onClick={() => handleAddall(1)}>
              {" "}
              1 to 2
            </span>
            <span className="options" onClick={() => handleAddall(2)}>
              2 to 1
            </span>
          </div>
        </div>
        <div className="addOrRemoveAll">
          <span> Remove all </span>
          <div className="optionWrapper">
            <span className="options" onClick={() => handleRemoveall(1)}>
              {" "}
              1 from 2
            </span>
            <span className="options" onClick={() => handleRemoveall(2)}>
              2 from 1
            </span>
          </div>
        </div>
      </div>
      <div className="right">
        <ul className="ul">
          {bucket2.map((item, i) => (
            <List item={item} key={i} setSelect={setSelect} select={select} />
          ))}
        </ul>
      </div>
    </div>
  );
}
