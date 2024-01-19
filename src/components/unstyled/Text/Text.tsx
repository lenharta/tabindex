import { type PolymorphicFactory } from '@/core/factory';
import { createPolymorphicFactory } from '@/core/factory';

export interface TextProps {
  span?: boolean | undefined;
}

export type TextFactory = PolymorphicFactory<{
  props: TextProps;
  component: 'p';
}>;

export const Text = createPolymorphicFactory<TextFactory>((props, ref) => {
  const { component = 'p', children, span, ...otherProps } = props;
  const Component = span ? 'span' : 'p';
  return (
    <Component {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});
