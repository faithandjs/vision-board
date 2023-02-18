import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(
  {} as {
    theme: 'dark' | 'light' | undefined;
    setTheme: (theme: 'dark' | 'light') => void;
    enabled: boolean;
    setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  }
);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const isStored = localStorage.getItem('vb-theme');
  const [enabled, setEnabled] = useState(true);
  const [themeMode, setThemeMode] = useState<'dark' | 'light'>();

  const setTheme = (theme: 'dark' | 'light') => {
    setThemeMode(theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('vb-theme', theme);
  };

  useEffect(() => {
    if (isStored) {
      setEnabled(isStored === 'dark' ? false : true);
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)')) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    } // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (enabled) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, [enabled]);
  const value = { theme: themeMode, setTheme, enabled, setEnabled };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

const useThemeCtx = () => useContext(ThemeContext);

export { ThemeProvider, useThemeCtx };

