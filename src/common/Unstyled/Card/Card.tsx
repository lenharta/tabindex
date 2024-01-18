import { type PolymorphicFactory, createPolymorphicFactory } from '@/utils';

export interface IPropsBaseCard {}

export type TFactoryCard = PolymorphicFactory<{
  component: 'div' | 'article' | 'section' | 'button' | 'a';
  props: IPropsBaseCard;
}>;

const defaultProps: Partial<TFactoryCard['props']> = {};

export const Card = createPolymorphicFactory<TFactoryCard>((props, ref) => {
  const { component: Component = 'div', children, ...otherProps } = props;
  return (
    <Component {...defaultProps} {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});
