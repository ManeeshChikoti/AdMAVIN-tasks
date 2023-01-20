import React from "react";

export default function List({item,i,setSelect,select}) {

  const handleSelect = (item) => {
    if (!select.includes(item)) {
      setSelect((prev) => [...prev, item]); 
    }
  };
  return (
    <li
     className="li"
      key={i}
      onClick={() => {
        handleSelect(item);
      }}
    >
      {item}
    </li>
  );
}
