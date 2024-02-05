import clsx from 'clsx';
import { type TBDX } from '@/types';
import { type CORE, createPolymorphicFactory } from '@/components/factory';
import { CardSection } from './CardSection';

export interface CardProps {
  size?: TBDX.Size;
  align?: TBDX.Alignment;
  radius?: TBDX.Radius;
}

export type CardFactory = CORE.Factory<{
  ref: HTMLDivElement;
  props: CardProps;
  component: 'div';
  components: {
    Section: typeof CardSection;
  };
}>;

export const Card = createPolymorphicFactory<CardFactory>((props, ref) => {
  const {
    size,
    align,
    radius,
    className,
    component: Component = 'div',
    children,
    ...otherProps
  } = props;

  const clxssName = clsx(
    'tbdx-card',
    {
      [`tbdx-card--size-${size}`]: size,
      [`tbdx-card--align-${align}`]: align,
      [`tbdx-card--radius-${radius}`]: radius,
    },
    className
  );

  return (
    <Component {...otherProps} ref={ref} className={clxssName}>
      {children}
    </Component>
  );
});

Card.displayName = '@TBDX/Card';
Card.Section = CardSection;
