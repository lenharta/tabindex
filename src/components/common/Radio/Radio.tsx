import { type Factory, factory } from '@/components/factory';

export type RadioProps = {};

export type RadioFactory = Factory<{
  props: RadioProps;
  component: 'Radio';
  components: {};
}>;

export const Radio = factory<RadioFactory>((props, ref) => {
  const { component: Component = 'button', children, ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});
