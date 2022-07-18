import React from "react";
import './main.css';

const Categories = () => {
  const handleClick=(mess) =>{
        alert(`you clicked ${mess}`);
      }
  const catData = [
    {
      catName: "Phones",
      catFun:'phone'
    },
    {
      catName: "Labtops",
      catFun:'Labtops'

    },
    {
      catName: "Accessories",
      catFun:'Accessories'
    },
  ];
  return (
    <>
      <div className="category">
        {catData.map((val, index) => {
          return (
            <div className="box" key={index} onClick={()=>alert(`you clicked ${val.catFun}`)}>
              <span>{val.catName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
