import { type Factory, factory } from '@/components/factory';

export type ButtonUnstyledProps = {
  disabled?: boolean;
  readonly?: boolean;
};

export type ButtonUnstyledFactory = Factory<{
  props: ButtonUnstyledProps;
  component: 'button';
}>;

export const ButtonUnstyled = factory<ButtonUnstyledFactory>((props, ref) => {
  const { component, children, ...otherProps } = props;
  const Component = component || 'button';
  return (
    <Component {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});

ButtonUnstyled.displayName = '@TBDX/ButtonUnstyled';
