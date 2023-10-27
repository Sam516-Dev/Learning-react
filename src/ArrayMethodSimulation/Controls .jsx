import React from "react";

const Controls = ({ dates, dispatch }) => {
  return (
    <div className="flex gap-8">
      {/* first button */}
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
        className="bg-red-500 hover:bg-red-950 text-white font-bold text-lg px-8 p-2 rounded-full"
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
  );
};

export default Controls;
