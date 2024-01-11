import { type Factory } from '@/utils/create-factory';

export type TPropsTitle = React.HTMLAttributes<HTMLHeadingElement>;
export type TPropsTitleAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface IPropsTitle extends TPropsTitle {
  /** Specifies the type of element to render */
  as?: TPropsTitleAs;
  /** Specifies a size for the element */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | (string & {});
  /** Specifies the alignment (x-axis) the elements' content */
  align?: 'start' | 'center' | 'end';
  /** Specifies the `font-style` property of the element */
  fontStyle?: 'normal' | 'italic';
  /** Specifies the `font-weight` property of the element */
  fontWeight?: 'xlt' | 'lgt' | 'reg' | 'med' | 'bld' | 'xbd';
}

export interface IPropsUnstyledTitle extends TPropsTitle {
  /** Specifies the type of element to render */
  as?: TPropsTitleAs;
}

export type TFactoryTitle = Factory<{
  props: TPropsTitle & IPropsTitle;
  ref: HTMLParagraphElement;
}>;

export type TFactoryUnstyledTitle = Factory<{
  props: IPropsUnstyledTitle;
  ref: HTMLParagraphElement;
}>;
