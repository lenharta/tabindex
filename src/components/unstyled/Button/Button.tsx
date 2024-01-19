import { type PolymorphicFactory, createPolymorphicFactory } from '@/core/factory';

export interface ButtonProps {
  loading?: boolean | undefined;
  readonly?: boolean | undefined;
  disabled?: boolean | undefined;
}

export type ButtonFactory = PolymorphicFactory<{
  props: ButtonProps;
  component: 'button' | 'a';
  components: {};
}>;

export const Button = createPolymorphicFactory<ButtonFactory>((props, ref) => {
  const {
    loading,
    disabled,
    readonly,
    children,
    component: Component = 'button',
    ...otherProps
  } = props;

  const dataProps = {
    'data-loading': loading,
    'data-disabled': disabled,
    'data-readonly': readonly,
  };

  return (
    <Component {...dataProps} {...otherProps} ref={ref}>
      {children}
    </Component>
  );
});

Button.displayName = '@tabindex/Unstyled/Button';
