import * as React from 'react';
import { App, Core } from '@/types';

const STATE: App.State = {};

const AppStateContext = React.createContext({} as App.State);
const AppDispatchContext = React.createContext({} as App.StateDispatch);

function AppProvider({ children = null }: Core.ProviderProps) {
  const [state, dispatch] = React.useReducer<App.StateReducer>(
    (state, update) => ({
      ...state,
      ...update,
    }),
    STATE
  );

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        <React.Fragment>{children}</React.Fragment>
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

const useAppState = () => React.useContext(AppStateContext);
const useAppDispatch = () => React.useContext(AppDispatchContext);

export { AppProvider, useAppState, useAppDispatch };
