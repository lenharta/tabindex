import * as React from 'react';
import { type Factory } from '@/utils';
import { type IPropsIcon } from '@/common/Icon';

export type TPropsTextarea = React.HTMLAttributes<HTMLTextAreaElement>;

export interface IPropsTextarea extends TPropsTextarea {
  /** Specifies a size for the element */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | (string & {});
  /** Specifies a name for the icon that will be rendered by the element */
  icon?: IPropsIcon['name'];
  /** Specifies the icon `height` and `width` property (% of button size). Set to 80% by default. */
  iconSize?: number;
}

export type TFactoryTextarea = Factory<{
  ref: HTMLTextAreaElement;
  props: IPropsTextarea;
  components: {
    Icon: React.FC<IPropsIcon>;
  };
}>;
