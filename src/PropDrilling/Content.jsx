import React from 'react';
import WelcomeMessage from './WelcomeMessage';

const Content = ({ selectedLanguage}) => {
  return (
    <div className="p-4">
      <h2 className=" text-lg font-bold  mt-4">Welcome Message </h2>
      <WelcomeMessage selectedLanguage={selectedLanguage}/>
    </div>
  );
};

export default Content;
