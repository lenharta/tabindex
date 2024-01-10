import React from 'react';
import { UnstyledTitle } from './Unstyled';
import { createModifierClasses } from '@/utils/create-modifier-classes';
import type { IPropsTitle } from './types';

export const Title = React.forwardRef<HTMLHeadingElement, IPropsTitle>((props, ref) => {
  const {
    as = 'h2',
    size = 'md',
    fontStyle = 'normal',
    fontWeight = 'reg',
    alignment = 'left',
    className,
    children,
    ...otherProps
  } = props;

  const css = createModifierClasses({
    base: 'Title',
    modifiers: { as, size, alignment, fontStyle, fontWeight },
    className,
  });

  return (
    <UnstyledTitle {...otherProps} className={css} ref={ref}>
      {children}
    </UnstyledTitle>
  );
});
