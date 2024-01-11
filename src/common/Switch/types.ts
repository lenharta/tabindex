import * as React from 'react';
import { type Factory } from '@/utils/create-factory';

export type TPropsSwitch = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type TPropsSwitchGroup = React.HTMLAttributes<HTMLDivElement>;

export interface IPropsSwitch extends TPropsSwitch {
  /** Specifies a size for the element */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | (string & {});
  /** Specifies the alignment (x-axis) the element content */
  align?: 'start' | 'center' | 'end';
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
