import React from "react";
import { useMyContext } from "./ContextComponent";

const Logic = () => {

  const { Count, setCount,Color, SetColor } = useMyContext();
 

  const HandlePlus = () => {
    setCount(Count + 10);
  };

  const HandleMinus = () => {
    if (Count > 0) {
      setCount(Count - 10);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center mt-8 bg-blue-100 py-20 border border-blue-300 rounded-md">
      
      <p className="text-2xl text-blue-950 -mt-8 font-bold">Your Current Score is {Count}</p>

      <div className="flex justify-center mt-10 items-center">

        <button
          onClick={HandlePlus}
          className="bg-blue-500 hover:bg-blue-600 text-white border border-blue-900 rounded-lg w-12 h-12 text-2xl font-bold mr-4"
        >
          +
        </button>

        <button
          onClick={HandleMinus}
          className="bg-red-500 hover:bg-red-600 text-white border border-red-900 rounded-lg w-12 h-12 text-2xl font-bold"
        >
          -
        </button>
      </div>

      {Count <= 100 ? (
        <p className="text-xl font-bold bg-blue-500 text-white py-4  px-8 rounded-md mt-4">
          "Let's make it over 100"
        </p>
      ) : Count > 100 ? (
        <p className="text-xl font-bold bg-blue-500 text-white py-4  px-8 rounded-md mt-4">
          "Good Job !"
        </p>
      ) : null}


      
    </div>
  );
};

export default Logic;
