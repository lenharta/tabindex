import clsx from 'clsx';
import React from 'react';
import { TBDX } from '@/types';
import { mergeProps } from '../utils';
import { Link as RouterLink } from 'react-router-dom';
import { LinkGroup } from './Group';

export interface LinkProps extends TBDX.LinkProps {
  to?: string | undefined;
  children?: React.ReactNode | undefined;
  className?: string | undefined;
  leftContent?: React.ReactNode | undefined;
  rightContent?: React.ReactNode | undefined;
}

const defaultProps: Partial<LinkProps> = {
  to: '/',
};

export type LinkExoticComponent = React.ForwardRefExoticComponent<
  LinkProps & React.RefAttributes<HTMLAnchorElement>
>;

export type LinkComponent = LinkExoticComponent & {
  Group: typeof LinkGroup;
};

export type LinkExoticRender = (
  props: LinkProps,
  ref: React.ForwardedRef<HTMLAnchorElement>
) => React.ReactNode;

export const LinkRender: LinkExoticRender = (props, ref) => {
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
      {leftContent && <div data-position="left">{leftContent}</div>}
      {children && <div>{children}</div>}
      {rightContent && <div data-position="right">{rightContent}</div>}
    </RouterLink>
  );
};

export const Link = React.forwardRef(LinkRender) as LinkComponent;

Link.displayName = 'common/Link';
Link.Group = LinkGroup;
