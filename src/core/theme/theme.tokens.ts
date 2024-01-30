export type TBDXSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TBDXSizeCompact = Exclude<TBDXSize, 'xs' | 'xl'>;
export type TBDXSizeExpanded = 'xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type TBDXPosition = 'top' | 'right' | 'bottom' | 'left';
export type TBDXAlignment = 'start' | 'center' | 'end';
export type TBDXPlacement = TBDXPosition | `${TBDXPosition}-${TBDXAlignment}`;

export type TBDXSpacing = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
export type TBDXFontSize = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
export type TBDXFontWeight = 'xlt' | 'lgt' | 'reg' | 'med' | 'bld' | 'xbd';

export type TBDXAlpha = 'A0' | 'A1' | 'A2' | 'A3' | 'A4' | 'A5';
export type TBDXShade = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

export type TBDXAccentVariantType = 'base' | 'base-interactive';
export type TBDXAccentVariantKey = `${TBDXColor}-${TBDXAccentVariantType}`;
export type TBDXAccentShades = `${TBDXAccentVariantKey}-${TBDXShade | TBDXAlpha}`;

export type TBDXSurfaceVariantType = 'base' | 'base-interactive' | 'invert' | 'invert-interactive';
export type TBDXSurfaceVariantKey = `surface-${TBDXSurfaceVariantType}`;
export type TBDXSurfaceShades = `${TBDXSurfaceVariantKey}-${TBDXShade}`;

export type TBDXColor =
  | 'orange'
  | 'yellow'
  | 'green'
  | 'cyan'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'violet'
  | 'pink'
  | 'magenta'
  | 'red';

export const DATA_TBDX_ALPHA: TBDXAlpha[] = ['A0', 'A1', 'A2', 'A3', 'A4', 'A5'];
export const DATA_TBDX_SHADE: TBDXShade[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
export const DATA_TBDX_COLOR: TBDXColor[] = [
  'orange',
  'yellow',
  'green',
  'cyan',
  'blue',
  'indigo',
  'purple',
  'violet',
  'pink',
  'magenta',
  'red',
];
