import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider'; // Import the ThemeContext
import './App.css'
import './index.css'

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Consume the context value

  return (
    <div className='container' style={{backgroundColor:theme === 'light' ? 'white' : 'black'}}>
        <h4 style={{color: theme === 'light' ? 'black' : 'white' }}>React Hook userContext</h4>
      <h3 style={{color: theme === 'light' ? 'black' : 'white' }}>Current Theme: {theme}</h3>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
