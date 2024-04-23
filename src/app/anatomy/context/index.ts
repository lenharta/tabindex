import React from 'react';

export interface AnatomyContextValue {}

export const AnatomyContext = React.createContext({} as AnatomyContextValue);
export const AnatomyProvider = AnatomyContext.Provider;
export const useAnatomyContext = () => React.useContext(AnatomyContext);
