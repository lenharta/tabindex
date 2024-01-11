import * as React from 'react';
import { type Factory } from '@/utils/create-factory';
import { type TKeyIcon, Icon } from '@/common/Icon';

export type TPropsInlineInput = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface IPropsInlineInput extends TPropsInlineInput {
  /** Specifies the role for the element */
  role?: React.AriaRole;
  /** Specifies a size for the element */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | (string & {});
  /** Specifies the alignment (x-axis) the element content */
  align?: 'start' | 'center' | 'end';
  /** Specifies a name for the icon that will be rendered by the element */
  icon?: TKeyIcon;
  /** Specifies the icon `height` and `width` property (% of button size). Set to 80% by default. */
  iconSize?: number;
  /** Specifies content to the left of the element label */
  leftContent?: React.ReactNode;
  /** Specifies content to the right of the element label */
  rightContent?: React.ReactNode;
}

export type TFactoryInlineInput = Factory<{
  ref: HTMLButtonElement;
  props: IPropsInlineInput;
  components: {
    Icon: typeof Icon;
  };
}>;
