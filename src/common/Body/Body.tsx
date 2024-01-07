import clsx from 'clsx';
import React from 'react';
import { UnstyledBody } from './Unstyled';
import type { TBodyComponent } from './types';

export const Body: TBodyComponent = React.forwardRef((props, ref) => {
  const { children, ...otherProps } = props;
  const css = clsx('Title');
  return (
    <UnstyledBody {...otherProps} className={css} ref={ref}>
      {children}
    </UnstyledBody>
  );
});
