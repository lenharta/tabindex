import * as React from 'react';
import { type TMode } from '@/core/types';
import { ThemeContext, createThemeStoreManager } from '@/core/theme';

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const storage = createThemeStoreManager('theme-mode');

  const [mode, dispatch] = React.useState<TMode>(storage.get() || 'dark');

  const next: TMode = mode === 'dark' ? 'light' : 'dark';

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
