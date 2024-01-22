import * as React from 'react';
import { ThemeContext } from './theme.context';
import { type TBDXThemeMode } from './theme.types';
import { createThemeStoreManager } from './theme.manager';

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const storage = createThemeStoreManager('data-prefers-theme-mode');
  const [mode, dispatch] = React.useState<TBDXThemeMode>(storage.get() || 'dark');
  const next: TBDXThemeMode = mode === 'dark' ? 'light' : 'dark';

  const dark = React.useCallback(() => {
    storage.set('dark');
    dispatch('dark');
  }, [mode, dispatch]);

  const light = React.useCallback(() => {
    storage.set('light');
    dispatch('light');
  }, [mode, dispatch]);

  const toggle = React.useCallback(() => {
    storage.set(next);
    dispatch(next);
  }, [mode, dispatch]);

  React.useEffect(() => {
    const root = document.getElementsByTagName('html');
    root[0].setAttribute('data-prefers-color-scheme', mode);
    storage.set(mode);
  }, [mode]);

  return (
    <ThemeContext.Provider
      value={{
        mode,
        next,
        dark,
        light,
        toggle,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
