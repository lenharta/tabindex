import { type PolymorphicFactory } from '@/core/factory';
import { createPolymorphicFactory } from '@/core/factory';

export interface TitleBaseProps {}

export type TitleFactory = PolymorphicFactory<{
  props: TitleBaseProps;
  component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  components: {};
}>;

export const Title = createPolymorphicFactory<TitleFactory>((props, ref) => {
  const { component: Component = 'h3', children, ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});
