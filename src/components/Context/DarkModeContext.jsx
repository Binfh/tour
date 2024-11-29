import React, { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkLight = () => setDarkMode((darkMode) => !darkMode);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkLight}}>
        <div className={`${darkMode ? 'dark-mode' : 'light-mode'} min-h-screen bb:overflow-hidden` }>
            {children}
        </div>
    </DarkModeContext.Provider>
  );
};
