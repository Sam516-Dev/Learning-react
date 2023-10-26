import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();


const ContextComponent = ({ children }) => {

  const [Count, setCount] = useState(0);
  const [Color, setColor ] = useState('')

  return (
    <MyContext.Provider value={{ Count, setCount, Color, setColor }}>
      {children}
    </MyContext.Provider>
  );
};

const useMyContext = () => {
  return useContext(MyContext);
};

export { ContextComponent, useMyContext };
