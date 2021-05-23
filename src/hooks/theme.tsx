import { createContext, useContext, useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from '../styles/themes';

interface ThemeContextData {
  toggleTheme(): void;
  theme: Theme;
}

interface Theme {
  name: string;
  colors: {
    body: string;
    text: string;
  }
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const toggleTheme = useCallback(() => {
    if (theme.name === 'light') {
      setTheme(darkTheme);
    }
    else if (theme.name === 'dark') {
      setTheme(lightTheme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ toggleTheme, theme }}
    >
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;