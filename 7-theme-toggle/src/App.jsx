import React from 'react';
import { ThemeProvider } from './ThemeProvider'; // Import the ThemeProvider
import ThemeSwitcher from './ThemeSwitcher'; // Import the ThemeSwitcher

const App = () => {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
};

export default App;
