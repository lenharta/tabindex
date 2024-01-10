import React from 'react';
import { UnstyledBody } from './Unstyled';
import { createModifierClasses } from '@/utils/create-modifier-classes';
import type { TBodyComponent } from './types';

export const Body: TBodyComponent = React.forwardRef((props, ref) => {
  const {
    size = 'sm',
    alignment = 'start',
    fontStyle = 'normal',
    fontWeight = 'reg',
    className,
    children,
    ...otherProps
  } = props;

  const css = createModifierClasses({
    base: 'Body',
    modifiers: { size, alignment, fontStyle, fontWeight },
    className,
  });

  return (
    <UnstyledBody {...otherProps} className={css} ref={ref}>
      {children}
    </UnstyledBody>
  );
});
