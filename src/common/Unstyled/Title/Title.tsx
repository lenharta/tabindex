import { createPolymorphicFactory } from '@/utils';
import { type TFactoryTitle } from './Title.types';

const defaultProps: Partial<TFactoryTitle['props']> = {};

export const Title = createPolymorphicFactory<TFactoryTitle>((props, ref) => {
  const { component: Component = 'h3', children, ...otherProps } = props;
  return (
    <Component {...defaultProps} {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});
