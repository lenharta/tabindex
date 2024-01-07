import type { HTMLAttributes } from 'react';

type TPropsTitle = Omit<HTMLAttributes<HTMLHeadingElement>, 'ref'>;

/** Defines the default HTML heading element tag */
export type THeading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

/** Defines the properties of the unstyled heading element */
export interface IPropsUnstyledTitle extends TPropsTitle {
  /** Specifies the HTML Heading level tag to be rendered. */
  as?: THeading;
}

/** Defines the properties of the heading element */
export interface IPropsTitle extends TPropsTitle {
  /** Specifies the HTML Heading level tag to be rendered. */
  as?: THeading;
}
