import * as React from 'react';
import { type ThemeContextValue } from './types';

export const ThemeContext = React.createContext({} as ThemeContextValue);
export const ThemeProvider = ThemeContext.Provider;
export const useThemeCTX = () => React.useContext(ThemeContext);
