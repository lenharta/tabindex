import type { PolymorphicFactory } from '@/core/factory';
import { createPolymorphicFactory } from '@/core/factory';

export interface CardBaseProps {}

export type CardFactory = PolymorphicFactory<{
  props: CardBaseProps;
  component: 'div' | 'a' | 'button';
  components: {};
}>;

export const Card = createPolymorphicFactory<CardFactory>((props, ref) => {
  const { component: Component = 'div', children, ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});
