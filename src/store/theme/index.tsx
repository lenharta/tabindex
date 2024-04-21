import React from 'react';
import { keys } from '@/utils';
import { STORE } from '@/types';
import { useStorage } from '@/store/local';

export enum THEME_ATTRIBUTES {
  dir = 'data-prefers-writing-mode',
  mode = 'data-prefers-color-scheme',
  accent = 'data-prefers-color-accent',
  contrast = 'data-prefers-color-contrast',
}

export const ThemeStateCTX = React.createContext({} as STORE.ThemeState);
export const ThemeDispatchCTX = React.createContext({} as STORE.ThemeDispatch);

export const ThemeStateProvider = ThemeStateCTX.Provider;
export const ThemeDispatchProvider = ThemeDispatchCTX.Provider;

export const useThemeStore = () => React.useContext(ThemeStateCTX);
export const useThemeDispatch = () => React.useContext(ThemeDispatchCTX);

export const ThemeStore = ({ children }: { children?: React.ReactNode }) => {
  const state: STORE.ThemeState = { accent: 'blue', mode: 'dark', dir: 'ltr', contrast: 'unset' };
  const storage = useStorage<STORE.ThemeState>({ key: 'local' });

  const initializer = (current: STORE.ThemeState) => {
    if (!storage.read() && current) storage.write(current);
    if (storage.read()) return storage.fetch()!;
    return current;
  };

  const reducer = (state: STORE.ThemeState, update: Partial<STORE.ThemeState>) => {
    return {
      ...state,
      ...update,
    };
  };

  const [theme, setTheme] = React.useReducer(reducer, state, initializer);

  React.useEffect(() => {
    const root = document.getElementById('root')!;

    keys(THEME_ATTRIBUTES).forEach((key) => {
      root.setAttribute(THEME_ATTRIBUTES[key], theme[key]);
    });
  }, [theme]);

  const dispatch = (value: Partial<STORE.ThemeState>) => {
    storage.write({ ...theme, ...value });
    setTheme(value);
  };

  return (
    <ThemeDispatchProvider value={dispatch}>
      <ThemeStateProvider value={theme}>{children}</ThemeStateProvider>
    </ThemeDispatchProvider>
  );
};
