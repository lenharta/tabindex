export type TNoop = () => void;
export type TBoolish = boolean | 'true' | 'false';
export type TCodeLanguage = 'tsx' | 'scss' | 'html' | 'bash' | 'json';

export type TMode = 'light' | 'dark';
export type TSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TFontStyle = 'normal' | 'italic';
export type TFontWeight = 'xlt' | 'lgt' | 'med' | 'reg' | 'bld' | 'xbd';

export type TPosition = 'top' | 'right' | 'bottom' | 'left';
export type TAlignment = 'start' | 'center' | 'end';
export type TPlacement = TPosition | `${TPosition}-${TAlignment}`;
export type TDimension<T = number | string> = { height: T; width: T };
export type TCoordinate<T = number | string> = { x: T; y: T };

export type MergeProps<P = {}, O = {}> = O & Omit<P, keyof O>;

export type FilterProps<P, U> = Pick<P, Exclude<keyof P, U>>;
