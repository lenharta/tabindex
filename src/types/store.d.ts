import React from 'react';

export enum MODE {
  dark = 'dark',
  light = 'light',
}

export enum DIR {
  ltr = 'left-to-right',
  rtl = 'right-to-left',
}

export enum COLOR {
  red = 'c-red',
  orange = 'c-orange',
  yellow = 'c-yellow',
  green = 'c-green',
  mint = 'c-mint',
  teal = 'c-teal',
  cyan = 'c-cyan',
  blue = 'c-blue',
  indigo = 'c-indigo',
  purple = 'c-purple',
  pink = 'c-pink',
  brown = 'c-brown',
  gray = 'c-gray',
}

export declare namespace STORE {
  export type AppState = {
    isLoading?: boolean | undefined;
    isSession?: boolean | undefined;
    isMenuOpen?: boolean | undefined;
  };

  export type AppContext = {
    isLoading?: boolean | undefined;
    isSession?: boolean | undefined;
    isMenuOpen?: boolean | undefined;
  };

  export type ThemeContext = {
    dir: keyof typeof DIR;
    mode: keyof typeof MODE;
    accent: keyof typeof COLOR;
  };

  export type ThemeState = {
    dir: keyof typeof DIR;
    mode: keyof typeof MODE;
    accent: keyof typeof COLOR;
  };

  export type AppDispatch = (value: Partial<AppState>) => void;
  export type ThemeDispatch = (value: Partial<ThemeState>) => void;
}
