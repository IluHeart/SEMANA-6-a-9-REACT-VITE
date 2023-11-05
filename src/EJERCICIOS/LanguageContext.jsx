import { createContext, useState } from 'react';

const LanguageContext = createContext();

// eslint-disable-next-line react/prop-types
const LanguageProvider = ({ children }) => {
  const [Language, setLanguage] = useState('en');
  console.log('Provided language:', Language);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    console.log('Language changed to:', newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ Language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };