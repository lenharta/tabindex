import { forwardRef } from 'react';
import type { IPropsUnstyledButton } from '../types';

export const UnstyledButton = forwardRef<HTMLButtonElement, IPropsUnstyledButton>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <button {...otherProps} ref={ref}>
      {children}
    </button>
  );
});

UnstyledButton.displayName = 'UnstyledButton';
