import { useEffect, useState, createContext, useContext } from 'react';
import { StaticTokens, ThemeTokens } from 'theming';
import { Global, SerializedStyles } from '@emotion/react';
import { rootCSS } from '../css/root';

interface ThemeProviderProps {
  defaultTheme: string;
  themes: ThemeTokens[];
  staticTokens: StaticTokens[];
  globalCSS?: SerializedStyles[];
  children?: React.ReactNode;
}

interface ThemeContextProps {
  theme: ThemeProviderProps['defaultTheme'];
  setTheme: (name: ThemeProviderProps['defaultTheme']) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: '',
  setTheme: () => null,
});

export const ThemeProvider = ({
  defaultTheme,
  themes,
  staticTokens,
  globalCSS,
  children,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {globalCSS &&
        globalCSS.map((css) => {
          return <Global styles={css} key={css.name} />;
        })}
      <Global styles={rootCSS(defaultTheme, themes, staticTokens)} />
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
