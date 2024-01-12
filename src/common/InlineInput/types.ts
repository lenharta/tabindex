import * as React from 'react';
import { type Factory } from '@/utils';
import { type IPropsIcon } from '@/common/Icon';

export type TPropsInlineInput = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface IPropsInlineInput extends TPropsInlineInput {
  /** Defines a label for the element */
  label?: string;
  /** Specifies text to give additional context to the label */
  infoText?: string;
  /** Specifies the role for the element */
  role?: React.AriaRole;
  /** Specifies a size for the element */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | (string & {});
  /** Specifies a style scheme for the element */
  scheme?: 'default' | 'secondary';
  /** Specifies the alignment (x-axis) the element content */
  align?: 'start' | 'center' | 'end';
  /** Specifies a name for the icon that will be rendered by the element */
  icon?: IPropsIcon['name'];
  /** Specifies the icon `height` and `width` property (% of button size). Set to 80% by default. */
  iconSize?: number;
}

export type TFactoryInlineInput = Factory<{
  ref: HTMLButtonElement;
  props: IPropsInlineInput;
  components: {
    Icon: React.FC<IPropsIcon>;
  };
}>;
