import React, { useState, useEffect } from 'react';

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check localStorage for theme preference on mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Default to light theme
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    // Apply the theme to the document
    document.documentElement.setAttribute('data-theme', theme);
    // Save the theme in localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
