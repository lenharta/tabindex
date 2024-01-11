import { SVGAttributes } from 'react';

export const defaultIconProps = {
  fill: 'currentColor',
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 16 16',
  height: 16,
  width: 16,
};

export type TKeyICON = keyof typeof ICON;

export type TPropsIcon = SVGAttributes<SVGElement>;

export interface IPropsIcon extends Omit<TPropsIcon, 'name'> {
  name: TKeyICON;
}

export enum ICON {
  square = 'square',
  squareFill = 'square-fill',
  squareCheck = 'square-check',
  squareCheckFill = 'square-check-fill',
  squareDash = 'square-dash',
  squareDashFill = 'square-dash-fill',
}
