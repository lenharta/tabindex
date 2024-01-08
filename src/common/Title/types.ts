import type { HTMLAttributes } from 'react';
import type {
  TCoreAlignment,
  TCoreFontStyle,
  TCoreFontWeight,
  TCoreHeading,
  TCoreSize,
} from '@/core/types';

type TPropsTitle = Omit<HTMLAttributes<HTMLHeadingElement>, 'ref'>;

export interface IPropsUnstyledTitle extends TPropsTitle {
  /** Specifies the HTML Heading level tag to be rendered. */
  as?: TCoreHeading;
}

export interface IPropsTitle extends TPropsTitle {
  /** Specifies the HTML Heading level tag to be rendered. */
  as?: TCoreHeading;

  /** Specifies the size style of the element. */
  size?: TCoreSize;

  /** Specifies the text-align style property of the element. */
  alignment?: TCoreAlignment;

  /** Specifies the font-size style property of the element. */
  fontStyle?: TCoreFontStyle;

  /** Specifies the font-weight style property of the element. */
  fontWeight?: TCoreFontWeight;
}
