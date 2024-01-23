export type TBDXColorName =
  | 'blue'
  | 'coolGrey'
  | 'cyan'
  | 'green'
  | 'grey'
  | 'magenta'
  | 'orange'
  | 'purple'
  | 'red'
  | 'teal'
  | 'warmGrey'
  | 'yellow';

export type TBDXColorShade = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

export type TBDXColorObject = Record<TBDXColorShade, string>;

export type TBDXColorLookup = Record<TBDXColorName, TBDXColorObject>;

export const TBDX_COLOR_BLUE: TBDXColorObject = {
  '100': '#edf5ff',
  '200': '#d0e2ff',
  '300': '#a6c8ff',
  '400': '#78a9ff',
  '500': '#4589ff',
  '600': '#0f62fe',
  '700': '#0043ce',
  '800': '#002d9c',
  '900': '#001d6c',
};

export const TBDX_COLOR_GREY: TBDXColorObject = {
  '100': '#f4f4f4',
  '200': '#e0e0e0',
  '300': '#c6c6c6',
  '400': '#a8a8a8',
  '500': '#8d8d8d',
  '600': '#6f6f6f',
  '700': '#525252',
  '800': '#393939',
  '900': '#262626',
};

export const TBDX_COLOR_COOLGREY: TBDXColorObject = {
  '100': '#f2f4f8',
  '200': '#dde1e6',
  '300': '#c1c7cd',
  '400': '#a2a9b0',
  '500': '#878d96',
  '600': '#697077',
  '700': '#4d5358',
  '800': '#343a3f',
  '900': '#21272a',
};

export const TBDX_COLOR_CYAN: TBDXColorObject = {
  '100': '#e5f6ff',
  '200': '#bae6ff',
  '300': '#82cfff',
  '400': '#33b1ff',
  '500': '#1192e8',
  '600': '#0072c3',
  '700': '#00539a',
  '800': '#003a6d',
  '900': '#012749',
};

export const TBDX_COLOR_GREEN: TBDXColorObject = {
  '100': '#defbe6',
  '200': '#a7f0ba',
  '300': '#6fdc8c',
  '400': '#42be65',
  '500': '#24a148',
  '600': '#198038',
  '700': '#0e6027',
  '800': '#044317',
  '900': '#022d0d',
};

export const TBDX_COLOR_MAGENTA: TBDXColorObject = {
  '100': '#fff0f7',
  '200': '#ffd6e8',
  '300': '#ffafd2',
  '400': '#ff7eb6',
  '500': '#ee5396',
  '600': '#d02670',
  '700': '#9f1853',
  '800': '#740937',
  '900': '#510224',
};

export const TBDX_COLOR_ORANGE: TBDXColorObject = {
  '100': '#fff2e8',
  '200': '#ffd9be',
  '300': '#ffb784',
  '400': '#ff832b',
  '500': '#eb6200',
  '600': '#ba4e00',
  '700': '#8a3800',
  '800': '#5e2900',
  '900': '#3e1a00',
};

export const TBDX_COLOR_PURPLE: TBDXColorObject = {
  '100': '#f6f2ff',
  '200': '#e8daff',
  '300': '#d4bbff',
  '400': '#be95ff',
  '500': '#a56eff',
  '600': '#8a3ffc',
  '700': '#6929c4',
  '800': '#491d8b',
  '900': '#31135e',
};

export const TBDX_COLOR_RED: TBDXColorObject = {
  '100': '#fff1f1',
  '200': '#ffd7d9',
  '300': '#ffb3b8',
  '400': '#ff8389',
  '500': '#fa4d56',
  '600': '#da1e28',
  '700': '#a2191f',
  '800': '#750e13',
  '900': '#520408',
};

export const TBDX_COLOR_TEAL: TBDXColorObject = {
  '100': '#d9fbfb',
  '200': '#9ef0f0',
  '300': '#3ddbd9',
  '400': '#08bdba',
  '500': '#009d9a',
  '600': '#007d79',
  '700': '#005d5d',
  '800': '#004144',
  '900': '#022b30',
};

export const TBDX_COLOR_WARMGREY: TBDXColorObject = {
  '100': '#f7f3f2',
  '200': '#e5e0df',
  '300': '#cac5c4',
  '400': '#ada8a8',
  '500': '#8f8b8b',
  '600': '#726e6e',
  '700': '#565151',
  '800': '#3c3838',
  '900': '#272525',
};

export const TBDX_COLOR_YELLOW: TBDXColorObject = {
  '100': '#fcf4d6',
  '200': '#fddc69',
  '300': '#f1c21b',
  '400': '#d2a106',
  '500': '#b28600',
  '600': '#8e6a00',
  '700': '#684e00',
  '800': '#483700',
  '900': '#302400',
};

export const TBDX_COLOR: TBDXColorLookup = {
  blue: TBDX_COLOR_BLUE,
  coolGrey: TBDX_COLOR_COOLGREY,
  cyan: TBDX_COLOR_CYAN,
  green: TBDX_COLOR_GREEN,
  grey: TBDX_COLOR_GREY,
  magenta: TBDX_COLOR_MAGENTA,
  orange: TBDX_COLOR_ORANGE,
  purple: TBDX_COLOR_PURPLE,
  red: TBDX_COLOR_RED,
  teal: TBDX_COLOR_TEAL,
  warmGrey: TBDX_COLOR_WARMGREY,
  yellow: TBDX_COLOR_YELLOW,
};
