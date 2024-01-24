import { type Factory, factory } from '@/components/factory';

export type CheckboxProps = {};

export type CheckboxFactory = Factory<{
  props: CheckboxProps;
  component: 'Checkbox';
  components: {};
}>;

export const Checkbox = factory<CheckboxFactory>((props, ref) => {
  const { component: Component = 'button', children, ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});
