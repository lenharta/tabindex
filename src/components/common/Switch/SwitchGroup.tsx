import { type Factory, factory } from '@/components/factory';

export type SwitchGroupProps = {};

export type SwitchGroupFactory = Factory<{
  props: SwitchGroupProps;
  component: 'SwitchGroup';
  components: {};
}>;

export const SwitchGroup = factory<SwitchGroupFactory>((props, ref) => {
  const { component: Component = 'fieldset', children, ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});
