import * as React from 'react';
import { type Factory } from '@/utils';

export type TPropsBody = React.HTMLAttributes<HTMLParagraphElement>;

export interface IPropsBody extends TPropsBody {
  /** Specifies a size for the element */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | (string & {});
  /** Specifies the alignment (x-axis) the elements' content */
  align?: 'start' | 'center' | 'end';
  /** Specifies the `font-style` property of the element */
  fontStyle?: 'normal' | 'italic';
  /** Specifies the `font-weight` property of the element */
  fontWeight?: 'xlt' | 'lgt' | 'reg' | 'med' | 'bld' | 'xbd';
}

export type TFactoryBody = Factory<{
  props: TPropsBody & IPropsBody;
  ref: HTMLParagraphElement;
}>;

export type TFactoryUnstyledBody = Factory<{
  props: TPropsBody;
  ref: HTMLParagraphElement;
}>;
