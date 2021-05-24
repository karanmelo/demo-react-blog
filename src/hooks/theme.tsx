import { createContext, useContext, useState, useCallback, useEffect } from 'react';
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
  const getTheme = (): Theme => {
    const localTheme: string = localStorage.getItem('demoReactBlogTheme') || '';

    if (localTheme === 'light') {
      return lightTheme;
    }
    else if (localTheme === 'dark') {
      return darkTheme;
    }

    return lightTheme;
  };

  const [theme, setTheme] = useState<Theme>(getTheme());

  const toggleTheme = useCallback(() => {
    if (theme.name === 'light') {
      setTheme(darkTheme);
      localStorage.setItem('demoReactBlogTheme', 'dark');
      return;
    }
    else if (theme.name === 'dark') {
      setTheme(lightTheme);
      localStorage.setItem('demoReactBlogTheme', 'light');
      return;
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