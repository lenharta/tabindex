import * as React from 'react';
import { localStorageManager } from '../local/local-storage-manager';
import { type ThemeState, ThemeCTX } from './context';

export const ThemeProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const INITIAL_STATE: ThemeState = { accent: 'blue', mode: 'dark' };

  const storage = localStorageManager<ThemeState>('theme-store');

  const [state, dispatch] = React.useState<ThemeState>(INITIAL_STATE);

  const setMode = React.useCallback(
    (value: ThemeState['mode']) => {
      storage.set({ ...state, mode: value });
      dispatch((current) => ({ ...current, mode: value }));
    },
    [state, storage]
  );

  const setAccent = React.useCallback(
    (value: ThemeState['accent']) => {
      storage.set({ ...state, accent: value });
      dispatch((current) => ({ ...current, accent: value }));
    },
    [state, storage]
  );

  const setModeDark = React.useCallback(() => {
    storage.set({ ...state, mode: 'dark' });
    dispatch((current) => ({ ...current, mode: 'dark' }));
  }, [state, storage]);

  const setModeLight = React.useCallback(() => {
    storage.set({ ...state, mode: 'light' });
    dispatch((current) => ({ ...current, mode: 'light' }));
  }, [state, storage]);

  const setModeToggle = React.useCallback(() => {
    storage.set({ ...state, mode: state.mode === 'light' ? 'dark' : 'light' });
    dispatch((current) => ({ ...current, mode: current.mode === 'light' ? 'dark' : 'light' }));
  }, [state, storage]);

  React.useLayoutEffect(() => {
    const root = document.getElementById('root')!;
    root.setAttribute('data-prefers-color-scheme', state.mode);
  }, [state.mode]);

  React.useEffect(() => {
    const update = () => {
      storage.get().then((payload) => {
        dispatch((current) => ({ ...current, ...payload }));
      });
    };
    void update();
  }, []);

  return (
    <ThemeCTX.Provider
      value={{ ...state, setMode, setAccent, setModeDark, setModeLight, setModeToggle }}
    >
      {children}
    </ThemeCTX.Provider>
  );
};
