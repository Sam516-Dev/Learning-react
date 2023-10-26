import React from "react";

const Controls = ({ dates, dispatch }) => {
  return (
    <>
      <div className="flex ">
        <ul className="bg-blue-200 text-lg  border-r-blue-400 p-5 mb-6">
          {dates.map((date, index) => (
            <li key={index}>{date.toString()}</li>
          ))}
        </ul>
      </div>

      <div className="flex gap-6">
        <button
          onClick={() => {
            dispatch({ type: "ON_PUSH", payload: new Date() });
          }}
          className="bg-blue-500 text-white font-bold text-lg px-8 p-2 rounded-md"
        >
          Push
        </button>

        <button
          onClick={() => {
            dispatch({ type: "POP" });
          }}
          className="bg-blue-500 text-white font-bold text-lg px-8 p-2 rounded-md"
        >
          Pop
        </button>
        <button
          onClick={() => {
            dispatch({ type: "UN_SHIFFT", payload: new Date() });
          }}
          className="bg-blue-500 text-white font-bold text-lg px-8 p-2 rounded-md"
        >
          Unshift
        </button>
        <button
          onClick={() => {
            dispatch({ type: "SHIFT" });
          }}
          className="bg-blue-500 text-white font-bold text-lg px-8 p-2 rounded-md"
        >
          Shift
        </button>
      </div>
    </>
  );
};

export default Controls;
