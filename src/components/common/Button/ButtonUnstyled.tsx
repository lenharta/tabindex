import { type Factory, factory } from '@/components/factory';

export type ButtonUnstyledProps = {};

export type ButtonUnstyledFactory = Factory<{
  props: ButtonUnstyledProps;
  component: 'ButtonUnstyled';
  components: {};
}>;

export const ButtonUnstyled = factory<ButtonUnstyledFactory>((props, ref) => {
  const { component: Component = 'button', children, ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});
