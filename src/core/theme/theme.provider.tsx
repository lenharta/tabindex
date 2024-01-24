import * as React from 'react';
import { ThemeProvider } from './theme.context';
import {
  type ThemeMode,
  type ThemeStorageKey,
  type ThemeManagerReturn,
  type ThemeContextProviderProps,
} from './types';

export const createThemeStoreManager = (key: ThemeStorageKey): ThemeManagerReturn => ({
  get: () => window.localStorage.getItem(key) as ThemeMode | null,
  set: (value) => window.localStorage.setItem(key, value),
  clear: () => window.localStorage.removeItem(key),
});

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const storage = createThemeStoreManager('data-prefers-theme-mode');
  const [mode, dispatch] = React.useState<ThemeMode>(storage.get() || 'dark');
  const next: ThemeMode = mode === 'dark' ? 'light' : 'dark';

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
    <ThemeProvider
      value={{
        mode,
        next,
        dark,
        light,
        toggle,
      }}
    >
      {children}
    </ThemeProvider>
  );
};
