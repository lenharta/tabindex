import * as React from 'react';
import { type Factory } from '@/utils/create-factory';

export type TPropsCheckbox = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type TPropsCheckboxGroup = React.HTMLAttributes<HTMLDivElement>;

export interface IPropsCheckbox extends TPropsCheckbox {
  /** Specifies a size for the element */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | (string & {});
  /** Specifies the alignment (x-axis) the element content */
  align?: 'start' | 'center' | 'end';
}

export interface IPropsCheckboxGroup extends TPropsCheckboxGroup {
  /** Specifies a size for the element */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | (string & {});
  /** Specifies the alignment (x-axis) the element content */
  align?: 'start' | 'center' | 'end';
  /** Specifies a directional layout for the element group */
  orientation?: 'horizontal' | 'vertical';
}

export type TFactoryCheckbox = Factory<{
  ref: HTMLButtonElement;
  props: IPropsCheckbox;
}>;

export type TFactoryCheckboxGroup = Factory<{
  ref: HTMLDivElement;
  props: IPropsCheckboxGroup;
}>;
