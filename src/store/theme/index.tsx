import React from 'react';
import { keys } from '@/utils';
import { STORE } from '@/types';
import { useStorage } from '@/store/local';

export enum THEME_ATTRIBUTES {
  dir = 'data-tbdx-prefers-writing-mode',
  mode = 'data-tbdx-prefers-color-scheme',
  accent = 'data-tbdx-prefers-color-accent',
}

export const ThemeStateCTX = React.createContext({} as STORE.ThemeState);
export const ThemeDispatchCTX = React.createContext({} as STORE.ThemeDispatch);

export const ThemeStateProvider = ThemeStateCTX.Provider;
export const ThemeDispatchProvider = ThemeDispatchCTX.Provider;

export const ThemeStore = ({ children }: { children?: React.ReactNode }) => {
  const state: STORE.ThemeState = { accent: 'blue', mode: 'dark', dir: 'ltr' };
  const storage = useStorage<STORE.ThemeState>({ key: 'local' });

  const initializer = (current: STORE.ThemeState) => {
    if (!storage.fetch()) storage.write(current);
    return current;
  };

  const reducer = (state: STORE.ThemeState, update: Partial<STORE.ThemeState>) => {
    return {
      ...state,
      ...update,
    };
  };

  const [theme, dispatch] = React.useReducer(reducer, state, initializer);

  React.useEffect(() => {
    const root = document.getElementById('root')!;

    keys(THEME_ATTRIBUTES).forEach((key) => {
      root.setAttribute(THEME_ATTRIBUTES[key], theme[key]);
    });
  }, [theme]);

  return (
    <ThemeDispatchProvider value={dispatch}>
      <ThemeStateProvider value={theme}>{children}</ThemeStateProvider>
    </ThemeDispatchProvider>
  );
};
