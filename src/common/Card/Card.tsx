import * as React from 'react';
import { createPolymorphicFactory, createThemeClasses } from '@/utils';
import { type TFactoryPolymorphicCard, type TPropsPolymorphicCard } from './Card.types';

export const Card = createPolymorphicFactory<TFactoryPolymorphicCard>(
  React.forwardRef<HTMLDivElement, TPropsPolymorphicCard>((props, ref) => {
    const { children, component, className, ...otherProps } = props;

    const Element = component || 'div';

    const css = createThemeClasses({
      base: 'Card',
      modifiers: { Element },
      className,
    });

    return (
      <Element ref={ref} {...otherProps} className={css}>
        {children}
      </Element>
    );
  })
);
