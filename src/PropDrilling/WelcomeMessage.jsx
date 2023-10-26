import React from "react";

const messages = {
  English: "Hello World!",
  German: "Hallo Welt!",
  French: "Bonjour le Monde!",
  Spanish: "Hola Mundo!",
};

const WelcomeMessage = ({ selectedLanguage }) => {
  return (
    <div>
      <p className="mt-2">{messages[selectedLanguage]}</p>
    </div>
  );
};

export default WelcomeMessage;
