import { SVGAttributes } from 'react';

export const defaultIconProps = {
  fill: 'currentColor',
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 16 16',
  height: 16,
  width: 16,
};

export type TIconKey =
  | 'square'
  | 'square-fill'
  | 'square-check'
  | 'square-check-fill'
  | 'square-dash'
  | 'square-dash-fill';

export interface IPropsIcon extends SVGAttributes<SVGElement> {
  name: TIconKey;
}

export type TLibraryIcon = (props: Omit<IPropsIcon, 'name'>) => JSX.Element;
