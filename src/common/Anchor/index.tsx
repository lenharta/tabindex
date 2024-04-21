import clsx from 'clsx';
import React from 'react';
import { TBDX } from '@/types';
import { mergeProps } from '../utils';

export interface AnchorProps extends TBDX.AnchorProps {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

const defaultProps: Partial<AnchorProps> = {};

export const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>((props, ref) => {
  const { children, ...otherProps } = props;

  const { size, className, block, theme, variant, ...forwardedProps } = mergeProps(
    otherProps,
    defaultProps
  );

  return (
    <a
      {...forwardedProps}
      ref={ref}
      className={clsx('Anchor', className)}
      data-variant={variant}
      data-theme={theme}
      data-block={block}
      data-size={size}
    />
  );
});

Anchor.displayName = 'common/Anchor';
