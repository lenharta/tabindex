import * as React from 'react';
import clsx from 'clsx';

import { type TBDX } from '@/types';
import { createStaticFactory, type CORE } from '@/components/factory';
import { CardScheme } from './Card';

export type CardGroupProps = {
  size?: TBDX.Size;
  align?: TBDX.Alignment;
  radius?: TBDX.Radius;
  scheme?: CardScheme;
  orientation?: TBDX.Orientation;
};

export type CardGroupFactory = CORE.Factory<{
  ref: HTMLDivElement;
  props: CardGroupProps;
  component: 'div';
}>;

export type CardGroupContextValue = CardGroupProps & {};

export const CardGroupContext = React.createContext<CardGroupContextValue>({});
export const CardGroupProvider = CardGroupContext.Provider;
export const useCardGroupContext = () => React.useContext(CardGroupContext);

export const CardGroup = createStaticFactory<CardGroupFactory>((props, ref) => {
  const {
    size,
    align,
    scheme,
    radius,
    orientation,
    children,
    className,
    component: Component = 'div',
    ...otherProps
  } = props;

  const clxssName = clsx('tbdx-card-group', {
    [`tbdx-card-group--${orientation}`]: orientation !== undefined,
  });

  return (
    <Component {...otherProps} ref={ref} className={clxssName} aria-orientation={orientation}>
      <CardGroupProvider value={{ size, scheme, align, radius, orientation }}>
        {children}
      </CardGroupProvider>
    </Component>
  );
});

CardGroup.displayName = '@TBDX/Card.Group';
