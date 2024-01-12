import * as React from 'react';
import { type Factory } from '@/utils';
import { type IPropsIcon } from '@/common/Icon';

export type TPropsSwitch = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type TPropsSwitchGroup = React.HTMLAttributes<HTMLDivElement>;

export interface IPropsSwitch extends TPropsSwitch {
  /** Defines a label for the element */
  label?: string;
  /** Specifies text to give additional context to the label */
  infoText?: string;
  /** Specifies the role for the element */
  role?: React.AriaRole;
  /** Specifies a size for the element */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | (string & {});
  /** Specifies the alignment (x-axis) the element content */
  align?: 'start' | 'center' | 'end';
  /** Specifies a name for the icon that will be rendered by the element */
  icon?: IPropsIcon['name'];
  /** Specifies the icon `height` and `width` property (% of button size). Set to 80% by default. */
  iconSize?: number;
}

export interface IPropsSwitchGroup extends TPropsSwitchGroup {
  /** Specifies a size for the element */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | (string & {});
  /** Specifies the alignment (x-axis) the element content */
  align?: 'start' | 'center' | 'end';
  /** Specifies a directional layout for the element group */
  orientation?: 'horizontal' | 'vertical';
}

export type TFactorySwitch = Factory<{
  ref: HTMLButtonElement;
  props: IPropsSwitch;
}>;

export type TFactorySwitchGroup = Factory<{
  ref: HTMLDivElement;
  props: IPropsSwitchGroup;
}>;
