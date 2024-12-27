import React, { createContext, useState } from 'react';

// Create the context with a default value of 'light'
const ThemeContext = createContext('light');

// Create a Provider component to provide the context value to the rest of the app
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default theme is 'light'

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
