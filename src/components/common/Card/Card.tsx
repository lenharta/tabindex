import clsx from 'clsx';
import { type TBDX } from '@/types';
import { type CORE, createPolymorphicFactory } from '@/components/factory';
import { CardSection } from './CardSection';
import { mergeProps } from '@/utils';
import { useCardGroupContext } from './CardGroup';

export type CardScheme = 'primary' | 'secondary' | 'action';

export interface CardProps {
  size?: TBDX.Size;
  align?: TBDX.Alignment;
  radius?: TBDX.Radius;
  scheme?: CardScheme;
  orientation?: TBDX.Orientation;
}

export type CardFactory = CORE.Factory<{
  ref: HTMLDivElement;
  props: CardProps;
  component: 'div';
  components: {
    Section: typeof CardSection;
  };
}>;

const defaultProps: CardProps = {
  size: 'sm',
  align: 'start',
};

export const Card = createPolymorphicFactory<CardFactory>((props, ref) => {
  const { children, className, component: Component = 'div', ...otherProps } = props;

  const context = useCardGroupContext();

  const { size, scheme, align, radius, orientation } = mergeProps<CardProps>({
    props: otherProps,
    context,
    defaultProps,
  });

  const clxss = clsx(
    'tbdx-card',
    {
      [`tbdx-card--size-${size}`]: size,
      [`tbdx-card--align-${align}`]: align,
      [`tbdx-card--radius-${radius}`]: radius,
      [`tbdx-card--radius-${scheme}`]: scheme,
      [`tbdx-card--radius-${orientation}`]: orientation,
    },
    className
  );

  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      {children}
    </Component>
  );
});

Card.displayName = '@TBDX/Card';
Card.Section = CardSection;
