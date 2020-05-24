import React, { createContext, useCallback, useContext, useState } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

import LightTheme from '../styles/themes/light';
import DarkTheme from '../styles/themes/dark';

export interface Theme {
  title: string;

  colors: {
    primary: string;
    secundary: string;

    background: string;
    text: string;
  };
}

interface ThemeContextData {
  theme: Theme;
  toggleTheme(): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(DarkTheme);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'dark' ? LightTheme : DarkTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledProvider theme={theme}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}

export { ThemeProvider, useTheme };
