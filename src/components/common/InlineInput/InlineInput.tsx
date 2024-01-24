import { type Factory, factory } from '@/components/factory';

export type InlineInputProps = {};

export type InlineInputFactory = Factory<{
  props: InlineInputProps;
  component: 'InlineInput';
  components: {};
}>;

export const InlineInput = factory<InlineInputFactory>((props, ref) => {
  const { component: Component = 'button', children, ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});
