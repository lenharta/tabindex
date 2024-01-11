import * as React from 'react';
import { type Factory } from '@/utils/create-factory';
import { Icon, type TKeyIcon } from '@/common/Icon';

export type TPropsButton = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type TPropsButtonGroup = React.HTMLAttributes<HTMLDivElement>;

export interface IPropsButton extends TPropsButton {
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
}

export interface IPropsButtonGroup extends TPropsButtonGroup {
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

export type TFactoryUnstyledButton = Factory<{
  ref: HTMLButtonElement;
  props: TPropsButton;
}>;

export type TFactoryButton = Factory<{
  ref: HTMLButtonElement;
  props: IPropsButton;
  components: {
    Icon: typeof Icon;
  };
}>;

export type TFactoryButtonGroup = Factory<{
  ref: HTMLDivElement;
  props: IPropsButtonGroup;
}>;
