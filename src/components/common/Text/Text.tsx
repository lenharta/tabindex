import * as React from 'react';
import clsx from 'clsx';
import { type TBDX } from '@/types';

export type TextProps = {
  size?: TBDX.Size;
  accent?: TBDX.Color;
  variant?: 'filled' | 'outlined' | 'gradient';
  align?: 'start' | 'center' | 'end';
  className?: string;
  children?: React.ReactNode;
  strong?: boolean;
  span?: boolean;
};

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>((props, ref) => {
  const {
    size = 'sm',
    align = 'start',
    accent,
    variant = 'filled',
    className,
    ...otherProps
  } = props;

  const clxssName = clsx(
    `tbdx-text`,
    {
      [`tbdx-text--size-${size}`]: size,
      [`tbdx-text--align-${align}`]: align,
      [`tbdx-text--accent-${accent}`]: accent,
      [`tbdx-text--variant-${variant}`]: variant,
    },
    className
  );

  return <p {...otherProps} className={clxssName} ref={ref} />;
});
