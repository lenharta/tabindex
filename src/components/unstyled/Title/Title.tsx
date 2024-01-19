import { type PolymorphicFactory } from '@/core/factory';
import { createPolymorphicFactory } from '@/core/factory';

export interface TitleProps {}

export type TitleFactory = PolymorphicFactory<{
  props: TitleProps;
  component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}>;

export const Title = createPolymorphicFactory((props, ref) => {
  const { component: Component = 'h3', children, ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});
