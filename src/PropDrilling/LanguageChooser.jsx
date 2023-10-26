import React from "react";

const LanguageChooser = ({
  languages,
  selectedLanguage,
  setSelectedLanguage,
}) => {
  return (

    <div>

      <label
        className="font-bold mr-12 text-orange-600"
        htmlFor="languageSelect"
      >
        Select a language:
      </label>

      <select
        id="languageSelect"
        onChange={(e) => setSelectedLanguage(e.target.value)}
        // className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-500"
        className="text-red-500"
        value={selectedLanguage}
      >

        {languages.map((language, index) => (
          <option key={index} value={language}>
            {language}
          </option>
        ))}
      </select>
      
    </div>


  );

};

export default LanguageChooser;
