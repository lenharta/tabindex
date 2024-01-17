import { useCallback, useEffect, useState } from 'react';
import { ThemeContext, createThemeStoreManager } from '@/core/theme';
import { type TMode } from '@/core/types';

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const storage = createThemeStoreManager('theme-mode');

  const [mode, dispatch] = useState<TMode>(storage.get() || 'dark');

  const next: TMode = mode === 'dark' ? 'light' : 'dark';

  const dark = useCallback(() => {
    storage.set('dark');
    dispatch('dark');
  }, [mode, dispatch]);

  const light = useCallback(() => {
    storage.set('light');
    dispatch('light');
  }, [mode, dispatch]);

  const toggle = useCallback(() => {
    storage.set(next);
    dispatch(next);
  }, [mode, dispatch]);

  useEffect(() => {
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
