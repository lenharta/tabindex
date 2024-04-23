import clsx from 'clsx';
import React from 'react';
import { TBDX } from '@/types';

export interface BoxProps extends TBDX.BaseProps<'div'> {
  className?: string | undefined;
  children?: React.ReactNode | undefined;
}

export const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const { children, className } = props;
  return (
    <div className={clsx('box', className)} ref={ref}>
      <React.Fragment>{children}</React.Fragment>
    </div>
  );
});

Box.displayName = 'components/Box';
