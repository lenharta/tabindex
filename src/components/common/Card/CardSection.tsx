import clsx from 'clsx';
import { type TBDX } from '@/types';
import { type CORE, createBasicFactory } from '@/components/factory';
import { CardScheme } from './Card';

export interface CardSectionProps {
  size?: TBDX.Size;
  align?: TBDX.Alignment;
  radius?: TBDX.Radius;
  scheme?: CardScheme;
  orientation?: TBDX.Orientation;
}

export type CardSectionFactory = CORE.Factory<{
  ref: HTMLDivElement;
  props: CardSectionProps;
  component: 'div';
}>;

export const CardSection = createBasicFactory<CardSectionFactory>((props) => {
  const {
    size,
    scheme,
    align,
    radius,
    orientation,
    children,
    className,
    component: Component = 'div',
    ...otherProps
  } = props;

  const clxss = clsx(
    'tbdx-card-section',
    {
      [`tbdx-card-section--size-${size}`]: size,
      [`tbdx-card-section--radius-${scheme}`]: scheme,
      [`tbdx-card-section--radius-${align}`]: align,
      [`tbdx-card-section--radius-${radius}`]: radius,
      [`tbdx-card-section--radius-${orientation}`]: orientation,
    },
    className
  );

  return (
    <Component {...otherProps} className={clxss}>
      {children}
    </Component>
  );
});

CardSection.displayName = '@TBDX/Card.Section';
