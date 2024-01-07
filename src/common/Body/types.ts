import type { HTMLAttributes, ForwardRefExoticComponent, RefAttributes } from 'react';

type TPropsBody = Omit<HTMLAttributes<HTMLParagraphElement>, 'ref'>;

/** Defines the properties of the unstyled paragraph element */
export interface IPropsUnstyledBody extends TPropsBody {}

/** Defines the properties of the paragraph element */
export interface IPropsBody extends TPropsBody {}

/** Defines a unstyled button component */
export type TUnstyledBodyComponent = ForwardRefExoticComponent<
  IPropsUnstyledBody & RefAttributes<HTMLParagraphElement>
>;

/** Defines a button component */
export type TBodyComponent = ForwardRefExoticComponent<
  IPropsBody & RefAttributes<HTMLParagraphElement>
>;
