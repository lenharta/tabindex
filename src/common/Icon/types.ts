import { SVGAttributes } from 'react';

export const defaultIconProps = {
  fill: 'currentColor',
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 16 16',
  height: 16,
  width: 16,
};

export type TKeyIcon = keyof typeof ICON;

export type TPropsIcon = SVGAttributes<SVGElement>;

export interface IPropsIcon extends Omit<TPropsIcon, 'name'> {
  name?: TKeyIcon;
}

export enum ICON {
  square = 'square',
  square_check = 'square_check',
  square_check_fill = 'square_check_fill',
  square_dash = 'square_dash',
  square_dash_fill = 'square_dash_fill',
  square_fill = 'square_fill',
}
