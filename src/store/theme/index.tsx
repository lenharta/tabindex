import * as React from 'react';
import { keys } from '@/utils';
import { App, Core } from '@/types';

const STATE: App.Theme = {
  dir: 'ltr',
  mode: 'dark',
  color: 'blue',
  contrast: 'no',
};

const ThemeStateContext = React.createContext({} as App.Theme);

const ThemeDispatchContext = React.createContext({} as App.ThemeDispatch);

function initializer<T extends Record<string, any>>(current: T): T {
  const read = (k: keyof T) => window.localStorage.getItem(k as any);
  const fetch = (k: keyof T) => window.localStorage.getItem(k as any);
  const write = (k: keyof T, v: any) => window.localStorage.setItem(k as any, v);

  keys(current).forEach((prop) => {
    read(prop) ? current[prop] == fetch(prop) : write(prop, current[prop]);
  });
  return current;
}

function reducer(state: App.Theme, update: Partial<App.Theme>): App.Theme {
  return {
    ...state,
    ...update,
  };
}

function updateAttributes(state: App.Theme, element?: HTMLElement | undefined) {
  if (!element) return;

  keys(state).forEach((prop) => {
    element.setAttribute(`data-prefers-${prop}`, state[prop]);
  });
}

function ThemeProvider({ children = null }: Core.ProviderProps) {
  const [state, dispatch] = React.useReducer(reducer, STATE, initializer);

  React.useEffect(() => {
    updateAttributes(state, document.getElementsByTagName('html')[0]);
  }, [state]);

  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        <React.Fragment>{children}</React.Fragment>
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
}

const useThemeState = () => React.useContext(ThemeStateContext);
const useThemeDispatch = () => React.useContext(ThemeDispatchContext);

export { ThemeProvider, useThemeState, useThemeDispatch };
