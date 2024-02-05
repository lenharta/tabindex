import * as React from 'react';
import clsx from 'clsx';
import { type Factory, createStatic } from '@/components/factory';
import { TBDX } from '@/types';
import { CardScheme } from './Card';

export type CardGroupProps = {
  size?: TBDX.Size;
  align?: TBDX.Alignment;
  radius?: TBDX.Radius;
  scheme?: CardScheme;
  orientation?: TBDX.Orientation;
};

export type CardGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  props: CardGroupProps;
  component: 'div';
}>;

export type CardGroupContextValue = CardGroupProps & {};

export const CardGroupContext = React.createContext<CardGroupContextValue>({});
export const CardGroupProvider = CardGroupContext.Provider;
export const useCardGroupContext = () => React.useContext(CardGroupContext);

export const CardGroup = createStatic<CardGroupFactory>((props) => {
  const { size, scheme, align, radius, orientation, children, ...otherProps } = props;

  const className = clsx('tbdx-card-group', {
    [`tbdx-card-group--${orientation}`]: orientation !== undefined,
  });

  return (
    <div {...otherProps} className={className} aria-orientation={orientation}>
      <CardGroupProvider value={{ size, scheme, align, radius, orientation }}>
        {children}
      </CardGroupProvider>
    </div>
  );
});

CardGroup.displayName = '@TBDX/Card.Group';
