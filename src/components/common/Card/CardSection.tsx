import clsx from 'clsx';
import { type TBDX } from '@/types';
import { type CORE, createBasicFactory } from '@/components/factory';

export interface CardSectionProps {
  size: TBDX.Size;
  radius: TBDX.Radius;
}

export type CardSectionFactory = CORE.Factory<{
  component: 'div';
  props: CardSectionProps;
}>;

export const CardSection = createBasicFactory<CardSectionFactory>((props) => {
  const { radius, size, component: Component = 'div', children, className, ...otherProps } = props;

  const clxssName = clsx(
    'tbdx-card-section',
    {
      [`tbdx-card-section--size-${size}`]: size,
      [`tbdx-card-section--radius-${radius}`]: radius,
    },
    className
  );

  return (
    <Component {...otherProps} className={clxssName}>
      {children}
    </Component>
  );
});

CardSection.displayName = '@TBDX/Card.Section';
