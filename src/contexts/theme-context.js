import React, { useReducer } from 'react';

export const ThemeContext = React.createContext();

function themeReducer(state, { type }) {
  switch (type) {
    case 'SET_LIGHT_THEME':
      return {
        theme: 'light'
      };
    
    case 'SET_DARK_THEME':
      return {
        theme: 'dark'
      };
    
    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  const theme = localStorage.getItem('theme');

  const [themeState, dispatch] = useReducer(themeReducer, { theme: theme ? theme : 'light' })

  const toggleTheme = () => {
    if (themeState.theme === 'dark') {
      localStorage.setItem('theme', 'light');
      return dispatch({ type: 'SET_LIGHT_THEME' });
    }

    localStorage.setItem('theme', 'dark');
    return dispatch({ type: 'SET_DARK_THEME' });
  };

  const value = {theme: themeState.theme, toggleTheme};

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};