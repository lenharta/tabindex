import { type Factory, factory } from '@/components/factory';

export type ButtonProps = {};

export type ButtonFactory = Factory<{
  props: ButtonProps;
  component: 'Button';
  components: {};
}>;

export const Button = factory<ButtonFactory>((props, ref) => {
  const { component: Component = 'button', children, ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});
