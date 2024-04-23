import clsx from 'clsx';
import React from 'react';
import { TBDX } from '@/types';
import { mergeProps } from '../utils';

export interface AnchorProps extends TBDX.AnchorProps {
  className?: string | undefined;
  children?: React.ReactNode | undefined;
  leftContent?: React.ReactNode | undefined;
  rightContent?: React.ReactNode | undefined;
}

const defaultProps: Partial<AnchorProps> = {
  variant: 'default',
  theme: 'default',
};

export const AnchorRender = (props: AnchorProps, ref: React.ForwardedRef<HTMLAnchorElement>) => {
  const { children, leftContent, rightContent, ...otherProps } = props;

  const { className, block, theme, variant, ...forwardedProps } = mergeProps(
    otherProps,
    defaultProps
  );

  return (
    <a
      {...forwardedProps}
      ref={ref}
      className={clsx('anchor', className)}
      data-variant={variant}
      data-theme={theme}
      data-block={block}
    >
      {leftContent && <div data-position="left">{leftContent}</div>}
      {children && <div>{children}</div>}
      {rightContent && <div data-position="right">{rightContent}</div>}
    </a>
  );
};

export const Anchor = React.forwardRef(
  AnchorRender
) as React.ForwardRefExoticComponent<AnchorProps>;

Anchor.displayName = 'common/Anchor';
