import { type PolymorphicFactory, createPolymorphicFactory } from '@/core/factory';

export interface TextBaseProps {
  span?: boolean | undefined;
}

export type TextFactory = PolymorphicFactory<{
  props: TextBaseProps;
  component: 'p';
  components: {};
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

Text.displayName = '@tabindex/Unstyled/Text';
