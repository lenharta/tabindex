import React from 'react';
import clsx from 'clsx';
import { UnstyledButton } from './Unstyled';
import type { IPropsButtonProps } from './types';

export const Button = React.forwardRef<HTMLButtonElement, IPropsButtonProps>((props, ref) => {
  const { children, scheme = 'secondary', size = 'md', ...otherProps } = props;

  const css = clsx('Button', [
    { [`Button--${size}`]: size !== undefined },
    { [`Button--${scheme}`]: scheme !== undefined },
  ]);

  return (
    <UnstyledButton {...otherProps} className={css} ref={ref}>
      {children}
    </UnstyledButton>
  );
});

Button.displayName = 'Button';
