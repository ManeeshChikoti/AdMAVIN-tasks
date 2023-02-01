import React  from "react";

export default function List({item,i,setSelect,select,selectbg,setSelectbg}) {
 
  const handleSelect = (item) => {
    if (!select.includes(item)) {
      setSelect((prev) => [...prev, item]); 
      setSelectbg(true);
    }
  };
  return (
    <li
     className={"li " +(selectbg && select.includes(item)? 'bg':'')}
      key={i}
      onClick={() => {
        handleSelect(item);
      }}
    >
      {item}
    </li>
  );
}
