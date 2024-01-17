import { createPolymorphicFactory } from '@/utils';
import { type TFactoryCard } from './Card.types';

const defaultProps: Partial<TFactoryCard['props']> = {};

export const Card = createPolymorphicFactory<TFactoryCard>((props, ref) => {
  const { component: Component = 'div', children, ...otherProps } = props;
  return (
    <Component {...defaultProps} {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});
