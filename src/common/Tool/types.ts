import * as React from 'react';
import { type Factory } from '@/utils/create-factory';
import { Icon, type TKeyIcon } from '@/common/Icon';

export type TPropsTool = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface IPropsTool extends TPropsTool {
  /** Specifies a size for the element */
  size?: 'sm' | 'md' | 'lg' | (string & {}) | number;
  /** Specifies the alignment (x-axis) the element content */
  align?: 'start' | 'center' | 'end';
  /** Specifies a name for the icon that will be rendered by the element */
  icon?: TKeyIcon;
  /** Specifies the icon `height` and `width` property (% of button size). Set to 80% by default. */
  iconSize?: number;
}

export type TFactoryTool = Factory<{
  ref: HTMLButtonElement;
  props: IPropsTool;
  components: {
    Icon: typeof Icon;
  };
}>;
