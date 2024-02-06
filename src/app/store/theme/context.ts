import { TBDX } from '@/types';
import * as React from 'react';

export type ThemeState = {
  accent: TBDX.Color;
  mode: TBDX.Mode;
};

export type ThemeContextValue = {
  mode: TBDX.Mode;
  accent: TBDX.Color;
  setMode(mode: TBDX.Mode): void;
  setAccent(accent: TBDX.Color): void;
  setModeToggle(): void;
  setModeLight(): void;
  setModeDark(): void;
};

export const ThemeCTX = React.createContext({} as ThemeContextValue);
export const useThemeCTX = () => React.useContext(ThemeCTX);
