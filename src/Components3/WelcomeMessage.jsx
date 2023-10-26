import React, { useContext, createContext } from "react";
import { MyContext } from '../App';


const messages = {
  English: "Hello World!",
  German: "Hallo Welt!",
  French: "Bonjour le Monde!",
  Spanish: "Hola Mundo!",
};


// const MyContext = createContext();

const WelcomeMessage = () => {
  const { selectedLanguage } = useContext(MyContext);



  return (
    <div>
      <p className="mt-2">{messages[selectedLanguage]}</p>
    </div>
  );
};

export default WelcomeMessage;
