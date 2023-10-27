import React from "react";

const ArrayList = ({ dates }) => {
  return (
   
      <div className="flex ">

        <ul className="bg-blue-200 text-lg  border-r-blue-400 p-5 mb-6">

          {
          dates.map((date, index) => (
            <li key={index}> {date.toString()} </li>
          ))
          }


        </ul>
        
      </div>
   
  );
};

export default ArrayList;
