import React from "react";
import LanguageChooser from "./LanguageChooser";

const Header = () => {


  return (
    <header className="bg-blue-500 p-4 text-white">
      <h1 className="text-2xl my-4 bg-red-400 font-bold">
        Language Application
      </h1>
      <div className="mt-4 p-12 bg-green-500">
        <LanguageChooser/>
      </div>    
    </header>
  );
};

export default Header;






















  {/* <button
        onClick={handleClick}
        className="py-8 absolute mt-10 z-10 bg-yellow-500 text-lg uppercase font-bold text-white"
      >
        Click here sam
      </button> */}

      // const handleClick = () => {
      //   console.log("languages are:", languages);
      //   console.log("Selected language is:", selectedLanguage);
      // };