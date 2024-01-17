import * as React from 'react';
import { type HighlighterGeneric } from 'shikiji';

export type TNoop = () => void;
export type TBoolish = boolean | 'true' | 'false';

export type TMergeProps<P = {}, O = {}> = O & Omit<P, keyof O>;
export type TFilterProps<P, U> = Pick<P, Exclude<keyof P, U>>;

export type TMode = 'light' | 'dark';
export type TSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TFontStyle = 'normal' | 'italic';
export type TFontWeight = 'xlt' | 'lgt' | 'med' | 'reg' | 'bld' | 'xbd';
export type TPosition = 'top' | 'right' | 'bottom' | 'left';
export type TAlignment = 'start' | 'center' | 'end';
export type TPlacement = TPosition | `${TPosition}-${TAlignment}`;
export type TDimension<T = number | string> = { height: T; width: T };
export type TCoordinate<T = number | string> = { x: T; y: T };
export type TCodeLanguage = 'tsx' | 'scss' | 'html' | 'bash' | 'json';

export type TContextTheme = {
  mode: TMode;
  next: TMode;
  dark(): void;
  light(): void;
  toggle(): void;
};

export interface TManagerTheme {
  set(value: TMode): void;
  get(): TMode | null;
  clear(): void;
}

export type TShikiHighlight = (code: string, language: TCodeLanguage) => TShikiHighlightReturn;
export type TShikiHighlightState = HighlighterGeneric<any, any> | null;

export interface TShikiHighlightReturn {
  code: string;
  highlighted: boolean;
}

export interface TShikiProviderValue {
  children: React.ReactNode;
  loadShiki: () => Promise<HighlighterGeneric<any, any>>;
}
