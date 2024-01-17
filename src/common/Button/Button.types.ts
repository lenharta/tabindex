import * as React from 'react';
import { type TKeyIcon } from '../Icon';

export type TComponentButton = 'button' | 'a';

export interface IPropsButton {
  /** Specifies a size for the element */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | (string & {});
  /** Specifies a style scheme for the element */
  scheme?: 'default' | 'secondary';
  /** Specifies the alignment (x-axis) the element content */
  align?: 'start' | 'center' | 'end';
  /** Specifies a name for the icon that will be rendered by the element */
  icon?: TKeyIcon;
  /** Specifies the icon `height` and `width` property (% of button size). Set to 80% by default. */
  iconSize?: number;
  /** Specifies content to the left of the label */
  leftContent?: React.ReactNode;
  /** Specifies content to the right of the label */
  rightContent?: React.ReactNode;
}

export interface IPropsButtonGroup {
  /** Specifies a size for the element */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | (string & {});
  /** Specifies a style scheme for the element */
  scheme?: 'default' | 'secondary';
  /** Specifies the alignment (x-axis) the element content */
  align?: 'start' | 'center' | 'end';
  /** Specifies a name for the icon that will be rendered by the element */
  icon?: TKeyIcon;
  /** Specifies the icon `height` and `width` property (% of button size). Set to 80% by default. */
  iconSize?: number;
  /** Specifies a directional layout for the element group */
  orientation?: 'horizontal' | 'vertical';
}
