import { type Factory, factory } from '@/components/factory';

export type RadioGroupProps = {};

export type RadioGroupFactory = Factory<{
  props: RadioGroupProps;
  component: 'RadioGroup';
  components: {};
}>;

export const RadioGroup = factory<RadioGroupFactory>((props, ref) => {
  const { component: Component = 'fieldset', children, ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});
