import * as React from 'react';
import { type Factory } from '@/utils/create-factory';
import { Icon, type TKeyIcon } from '@/common/Icon';

export type TPropsControl = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type TPropsControlGroup = React.HTMLAttributes<HTMLDivElement>;

export interface IPropsControl extends TPropsControl {
  /** Specifies a size for the element */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | (string & {});
  /** Specifies the alignment (x-axis) the element content */
  align?: 'start' | 'center' | 'end';
  /** Specifies a name for the icon that will be rendered by the element */
  icon?: TKeyIcon;
  /** Specifies the icon `height` and `width` property (% of button size). Set to 80% by default. */
  iconSize?: number;
  /** Specifies a style scheme for the element */
  scheme?: 'default' | 'secondary';
}

export interface IPropsControlGroup extends TPropsControlGroup {
  /** Specifies a size for the element */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | (string & {});
  /** Specifies the alignment (x-axis) the element content */
  align?: 'start' | 'center' | 'end';
  /** Specifies a name for the icon that will be rendered by the element */
  icon?: TKeyIcon;
  /** Specifies the icon `height` and `width` property (% of button size). Set to 80% by default. */
  iconSize?: number;
  /** Specifies a style scheme for the element */
  scheme?: 'default' | 'secondary';
  /** Specifies a directional layout for the element group */
  orientation?: 'horizontal' | 'vertical';
}

export type TFactoryControl = Factory<{
  props: IPropsControl;
  ref: HTMLButtonElement;
  components: {
    Icon: typeof Icon;
  };
}>;

export type TFactoryControlGroup = Factory<{
  props: IPropsControlGroup;
  ref: HTMLDivElement;
}>;
