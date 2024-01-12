import * as React from 'react';
import { type Factory } from '@/utils';
import { type IPropsIcon } from '@/common/Icon';

export type TPropsClose = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface IPropsClose extends TPropsClose {
  /** Specifies a size for the element */
  size?: 'sm' | 'md' | 'lg' | (string & {}) | number;
  /** Specifies the alignment (x-axis) the element content */
  align?: 'start' | 'center' | 'end';
  /** Specifies a name for the icon that will be rendered by the element */
  icon?: IPropsIcon['name'];
  /** Specifies the icon `height` and `width` property (% of button size). Set to 80% by default. */
  iconSize?: number;
}

export type TFactoryClose = Factory<{
  ref: HTMLButtonElement;
  props: IPropsClose;
  components: {
    Icon: React.FC<IPropsIcon>;
  };
}>;
