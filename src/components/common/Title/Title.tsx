import * as React from 'react';
import clsx from 'clsx';

import { type TBDX } from '@/types';

function findComponent(component: TitleElement, props: Partial<TitleProps>): TitleElement {
  const { h1, h2, h3, h4, h5, h6 } = props;
  if (h1 !== undefined) return 'h1';
  if (h2 !== undefined) return 'h2';
  if (h3 !== undefined) return 'h3';
  if (h4 !== undefined) return 'h4';
  if (h5 !== undefined) return 'h5';
  if (h6 !== undefined) return 'h6';
  return component;
}

export type TitleElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type TitleBaseProps = React.JSX.IntrinsicElements['h3'];

export type TitleProps = TitleBaseProps & {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  size?: TBDX.Size;
  align?: TBDX.Alignment;
  accent?: TBDX.Color;
  variant?: 'filled' | 'outlined' | 'gradient';
  component?: TitleElement;
};

export const Title = React.forwardRef<HTMLHeadingElement, TitleProps>((props, ref) => {
  const {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    size,
    align = 'start',
    accent,
    variant = 'filled',
    children,
    className,
    component = 'h3',
    ...otherProps
  } = props;

  const Component = React.useMemo(
    () => findComponent(component, { h1, h2, h3, h4, h5, h6 }),
    [component, h1, h2, h3, h4, h5, h6]
  );

  const clxssName = clsx(
    'tbdx-title',
    {
      [`tbdx-title--size-${size}`]: size,
      [`tbdx-title--align-${align}`]: align,
      [`tbdx-title--accent-${accent}`]: accent,
      [`tbdx-title--variant-${variant}`]: variant,
    },
    className
  );

  return (
    <Component ref={ref} className={clxssName} {...otherProps}>
      {children}
    </Component>
  );
});
