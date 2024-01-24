import { type Factory, factory } from '@/components/factory';

export type CheckboxGroupProps = {};

export type CheckboxGroupFactory = Factory<{
  props: CheckboxGroupProps;
  component: 'CheckboxGroup';
  components: {};
}>;

export const CheckboxGroup = factory<CheckboxGroupFactory>((props, ref) => {
  const { component: Component = 'fieldset', children, ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});
