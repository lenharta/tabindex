export type TCoreMode = 'dark' | 'light';

export type TCoreSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TCorePosition = 'top' | 'right' | 'bottom' | 'left';
export type TCoreAlignment = 'start' | 'center' | 'end';
export type TCorePlacement = TCorePosition | `${TCorePosition}-${TCoreAlignment}`;

export type TCoreHeading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type TCoreFontStyle = 'normal' | 'italic';
export type TCoreFontWeight = 'xlt' | 'lgt' | 'med' | 'reg' | 'bld' | 'xbd';

export interface TCoreThemeOptions {
  size?: TCoreSize;
  position?: TCorePosition;
  placement?: TCorePlacement;
  alignment?: TCoreAlignment;
  fontStyle?: TCoreFontStyle;
  fontWeight?: TCoreFontWeight;
}
