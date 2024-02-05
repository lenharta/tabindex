import * as React from 'react';
import clsx from 'clsx';

import { type TBDX } from '@/types';
import { type LinkProps as RouterLinkProps, Link as RouterLink } from 'react-router-dom';

export type LinkProps = RouterLinkProps & {
  to: string;
  label?: string;
  children?: string;
  accent?: TBDX.Color;
  size?: TBDX.Size;
};

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { to, children, className, size, accent, ...otherProps } = props;

  const clxssName = clsx(
    'tbdx-link',
    {
      [`tbdx-link--size-${size}`]: size,
      [`tbdx-link--accent-${accent}`]: accent,
    },
    className
  );

  return (
    <RouterLink {...otherProps} className={clxssName} ref={ref} to={to}>
      {children}
    </RouterLink>
  );
});
