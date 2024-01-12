import * as React from 'react';
import { type Factory } from '@/utils';
import { type IPropsIcon } from '@/common/Icon';

export type TPropsCheckbox = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type TPropsCheckboxGroup = React.HTMLAttributes<HTMLDivElement>;

export interface IPropsCheckbox extends TPropsCheckbox {
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
  /** Specifies a style variant for the element */
  variant?: 'default' | 'outlined';
  /** Specifies a name for the icon that will be rendered by the element */
  icon?: IPropsIcon['name'];
  /** Specifies the icon `height` and `width` property (% of button size). Set to 80% by default. */
  iconSize?: number;
  /** Description displayed below the label */
  description?: React.ReactNode;
  /** Indicates the intdeterminate state of the checkbox, if true the `checked` property is ignored */
  indeterminate?: boolean;
  /** Assigns a ref to the root element */
  rootRef?: React.ForwardedRef<HTMLDivElement>;
}

export interface IPropsCheckboxGroup extends TPropsCheckboxGroup {
  // value: string | 'true' | 'false' | 'mixed' | (string & {});
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
