import clsx from 'clsx';
import React from 'react';
import { UnstyledTitle } from './Unstyled';
import type { IPropsTitle } from './types';

export const Title = React.forwardRef<HTMLHeadingElement, IPropsTitle>((props, ref) => {
  const { as = 'h2', children, ...otherProps } = props;
  const css = clsx('Title');
  return (
    <UnstyledTitle {...otherProps} className={css} ref={ref}>
      {children}
    </UnstyledTitle>
  );
});
