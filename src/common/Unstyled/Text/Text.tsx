import { createPolymorphicFactory } from '@/utils';
import { type TFactoryText } from './Text.types';

const defaultProps: Partial<TFactoryText['props']> = {};

export const Text = createPolymorphicFactory<TFactoryText>((props, ref) => {
  const { component = 'p', span, children, ...otherProps } = props;
  const Component = span ? 'span' : component;
  return (
    <Component {...defaultProps} {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});
