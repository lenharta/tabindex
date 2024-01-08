import { TCoreAlignment, TCoreFontStyle, TCoreFontWeight, TCoreSize } from '@/core/types';
import type { HTMLAttributes, ForwardRefExoticComponent, RefAttributes } from 'react';

type TPropsBody = Omit<HTMLAttributes<HTMLParagraphElement>, 'ref'>;

export interface IPropsUnstyledBody extends TPropsBody {
  /** Specifies the size style of the element. */
  size?: TCoreSize;

  /** Specifies the text-align style property of the element. */
  alignment?: TCoreAlignment;

  /** Specifies the font-size style property of the element. */
  fontStyle?: TCoreFontStyle;

  /** Specifies the font-weight style property of the element. */
  fontWeight?: TCoreFontWeight;
}

export interface IPropsBody extends TPropsBody {
  /** Specifies the size style of the element. */
  size?: TCoreSize;

  /** Specifies the text-align style property of the element. */
  alignment?: TCoreAlignment;

  /** Specifies the font-size style property of the element. */
  fontStyle?: TCoreFontStyle;

  /** Specifies the font-weight style property of the element. */
  fontWeight?: TCoreFontWeight;
}

/** Defines a unstyled button component */
export type TUnstyledBodyComponent = ForwardRefExoticComponent<
  IPropsUnstyledBody & RefAttributes<HTMLParagraphElement>
>;

/** Defines a button component */
export type TBodyComponent = ForwardRefExoticComponent<
  IPropsBody & RefAttributes<HTMLParagraphElement>
>;
