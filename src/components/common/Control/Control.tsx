import { type Factory, factory } from '@/components/factory';

export type ControlProps = {};

export type ControlFactory = Factory<{
  props: ControlProps;
  component: 'Control';
  components: {};
}>;

export const Control = factory<ControlFactory>((props, ref) => {
  const { component: Component = 'button', children, ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});
