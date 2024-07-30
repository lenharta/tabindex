import * as React from 'react';

export declare namespace App {
  export type Dir = 'ltr' | 'rtl';
  export type Mode = 'light' | 'dark';
  export type Color =
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'mint'
    | 'teal'
    | 'cyan'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'pink'
    | 'brown';

  export type Theme = {
    contrast: 'yes' | 'no';
    color: Color;
    mode: Mode;
    dir: Dir;
  };

  export type State = {
    isError?: boolean | undefined;
    isLoading?: boolean | undefined;
  };

  export type StoreReducer<T> = (state: T, update: Partial<T>) => T & Partial<T>;
  export type StoreDispatch<T> = React.Dispatch<Partial<T>>;

  export type ThemeReducer = StoreReducer<Theme>;
  export type StateReducer = StoreReducer<State>;

  export type ThemeDispatch = StoreDispatch<Theme>;
  export type StateDispatch = StoreDispatch<State>;
}
