import { type Factory, factory } from '@/components/factory';

export type ControlGroupProps = {};

export type ControlGroupFactory = Factory<{
  props: ControlGroupProps;
  component: 'ControlGroup';
  components: {};
}>;

export const ControlGroup = factory<ControlGroupFactory>((props, ref) => {
  const { component: Component = 'fieldset', children, ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});
