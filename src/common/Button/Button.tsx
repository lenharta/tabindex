import React from 'react';
import { UnstyledButton } from './Unstyled';
import { createModifierClasses } from '@/utils/create-modifier-classes';
import type { IPropsButtonProps } from './types';

export const Button = React.forwardRef<HTMLButtonElement, IPropsButtonProps>((props, ref) => {
  const { children, scheme = 'secondary', size = 'md', className, ...otherProps } = props;

  const css = createModifierClasses({
    base: 'Button',
    modifiers: { size, scheme },
    className,
  });

  return (
    <UnstyledButton {...otherProps} className={css} ref={ref}>
      {children}
    </UnstyledButton>
  );
});

Button.displayName = 'Button';
