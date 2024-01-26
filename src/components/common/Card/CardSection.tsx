import clsx from 'clsx';
import { type Factory, createPolymorphic } from '@/components/factory';

export type CardSectionProps = {
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  border?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  className?: string;
};

type CardSectionFactory = Factory.Config<{
  props: CardSectionProps;
  component: 'div';
}>;

export const CardSection = createPolymorphic<CardSectionFactory>((props, ref) => {
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
    'CardSection',
    {
      [`CardSection--radius-${radius}`]: radius !== undefined,
      [`CardSection--border-${border}`]: border !== undefined,
      [`CardSection--shadow-${shadow}`]: shadow !== undefined,
    },
    defaultClassName
  );

  return (
    <Component {...otherProps} className={className} ref={ref}>
      {children}
    </Component>
  );
});

CardSection.displayName = '@TBDX/Card.Section';
