import clsx from 'clsx';
import { type Factory, createPolymorphic } from '@/components/factory';
import { CardSection } from './CardSection';
import { CardGroup } from './CardGroup';

export type CardProps = {
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  border?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  className?: string;
};

type CardFactory = Factory.Config<{
  props: CardProps;
  component: 'section';
  components: {
    Section: typeof CardSection;
    Group: typeof CardGroup;
  };
}>;

export const Card = createPolymorphic<CardFactory>((props, ref) => {
  const {
    radius,
    border,
    shadow,
    className: defaultClassName,
    component: Component = 'div',
    children,
    ...otherProps
  } = props;

  const className = clsx(
    'Card',
    {
      [`Card--radius-${radius}`]: radius !== undefined,
      [`Card--border-${border}`]: border !== undefined,
      [`Card--shadow-${shadow}`]: shadow !== undefined,
    },
    defaultClassName
  );

  return (
    <Component {...otherProps} className={className} ref={ref}>
      {children}
    </Component>
  );
});

Card.displayName = '@TBDX/Card';
Card.Section = CardSection;
Card.Group = CardGroup;
