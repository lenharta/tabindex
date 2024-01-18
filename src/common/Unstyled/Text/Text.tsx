import type { PolymorphicFactory } from '@/core/factory';
import { createPolymorphicFactory } from '@/core/factory';

export interface TextBaseProps {
  code?: boolean | undefined;
  span?: boolean | undefined;
}

export type TextFactory = PolymorphicFactory<{
  props: TextBaseProps;
  component: 'p' | 'span' | 'code';
  components: {};
}>;

export const Text = createPolymorphicFactory<TextFactory>((props, ref) => {
  const { component = 'p', code, span, children, ...otherProps } = props;
  const Component = code ? 'code' : span ? 'span' : component;
  return (
    <Component {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});
