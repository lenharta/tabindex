import * as React from 'react';
import clsx from 'clsx';
import { type Factory, createStatic } from '@/components/factory';

export type CardGroupProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  border?: 'sm' | 'md' | 'lg';
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  scheme?: 'primary' | 'secondary' | 'action';
  spacing?: '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10';
  orientation?: 'horizontal' | 'vertical';
  children?: React.ReactNode;
  className?: string;
};

export type CardGroupFactory = Factory.Config<{
  props: CardGroupProps;
  component: 'div';
}>;

export type CardGroupContextValue = CardGroupProps & {};

export const CardGroupContext = React.createContext<CardGroupContextValue>({});
export const CardGroupProvider = CardGroupContext.Provider;

export const useCardGroupContext = () => React.useContext(CardGroupContext);

export const CardGroup = createStatic<CardGroupFactory>((props) => {
  const {
    size = 'sm',
    radius,
    border,
    shadow,
    scheme = 'secondary',
    spacing = '02',
    orientation = 'horizontal',
    children,
    ...otherProps
  } = props;

  const className = clsx('tbdx-card-group', {
    [`tbdx-card-group--${spacing}`]: spacing !== undefined,
    [`tbdx-card-group--${orientation}`]: orientation !== undefined,
  });

  return (
    <div {...otherProps} className={className}>
      <CardGroupProvider value={{ scheme, radius, size }}>{children}</CardGroupProvider>
    </div>
  );
});

CardGroup.displayName = '@TBDX/Card.Group';
