import { type Factory, factory } from '@/components/factory';

export type SwitchProps = {};

export type SwitchFactory = Factory<{
  props: SwitchProps;
  component: 'Switch';
  components: {};
}>;

export const Switch = factory<SwitchFactory>((props, ref) => {
  const { component: Component = 'button', children, ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});
