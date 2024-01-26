import { Factory } from '@/components/factory';

type CardProps = {};

type CardFactory = Factory.Config<{
  component: 'button';
  props: CardProps;
}>;

export const Card = Factory.createPolymorphic<CardFactory>((props, ref) => {
  const { component, children, ...otherProps } = props;
  const Component = component || 'button';
  return (
    <Component {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});
