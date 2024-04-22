import clsx from 'clsx';
import React from 'react';
import { TBDX } from '@/types';
import { LinkGroup } from './Group';
import { mergeProps } from '../utils';
import { Link as RouterLink } from 'react-router-dom';

export interface LinkProps extends TBDX.LinkProps {
  to?: string | undefined;
  children?: React.ReactNode | undefined;
  className?: string | undefined;
  leftContent?: React.ReactNode | undefined;
  rightContent?: React.ReactNode | undefined;
}

const defaultProps: Partial<LinkProps> = {
  to: '/',
  theme: 'default',
  variant: 'default',
};

export type LinkExoticComponent = React.ForwardRefExoticComponent<
  LinkProps & React.RefAttributes<HTMLAnchorElement>
>;

export type LinkComponent = LinkExoticComponent & {
  Group: typeof LinkGroup;
};

export const LinkRender = (props: LinkProps, ref: React.ForwardedRef<HTMLAnchorElement>) => {
  const { children, leftContent, rightContent, ...otherProps } = props;

  const { to, size, block, theme, variant, className } = mergeProps(otherProps, defaultProps);

  return (
    <RouterLink
      to={to}
      ref={ref}
      className={clsx('Link', className)}
      data-variant={variant}
      data-block={block}
      data-theme={theme}
      data-size={size}
    >
      <span className="Link-inner">
        {leftContent && <div data-position="left">{leftContent}</div>}
        {children && <div>{children}</div>}
        {rightContent && <div data-position="right">{rightContent}</div>}
      </span>
    </RouterLink>
  );
};

export const Link = React.forwardRef(LinkRender) as LinkComponent;

Link.displayName = 'common/Link';
Link.Group = LinkGroup;
