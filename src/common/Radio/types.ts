import * as React from 'react';
import { type Factory } from '@/utils/create-factory';

export type TPropsRadio = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type TPropsRadioGroup = React.HTMLAttributes<HTMLDivElement>;

export interface IPropsRadio extends TPropsRadio {
  /** Specifies a size for the element */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | (string & {});
  /** Specifies the alignment (x-axis) the element content */
  align?: 'start' | 'center' | 'end';
}

export interface IPropsRadioGroup extends TPropsRadioGroup {
  /** Specifies a size for the element */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | (string & {});
  /** Specifies the alignment (x-axis) the element content */
  align?: 'start' | 'center' | 'end';
  /** Specifies a directional layout for the element group */
  orientation?: 'horizontal' | 'vertical';
}

export type TFactoryRadio = Factory<{
  ref: HTMLButtonElement;
  props: IPropsRadio;
}>;

export type TFactoryRadioGroup = Factory<{
  ref: HTMLDivElement;
  props: IPropsRadioGroup;
}>;
