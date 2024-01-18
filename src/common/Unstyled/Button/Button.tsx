import type { PolymorphicFactory } from '@/core/factory';
import { createPolymorphicFactory } from '@/core/factory';

export interface ButtonBaseProps {
  loading?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  excludeTabOrder?: boolean;
}

export type ButtonFactory = PolymorphicFactory<{
  props: ButtonBaseProps;
  component: 'button' | 'a';
}>;

const defaultProps: Partial<ButtonFactory['props']> = {};

export const Button = createPolymorphicFactory<ButtonFactory>((props, ref) => {
  const {
    loading,
    disabled,
    readonly,
    children,
    leftContent,
    rightContent,
    excludeTabOrder,
    component: Component = 'button',
    ...otherProps
  } = props;

  return (
    <Component ref={ref} {...defaultProps} {...otherProps}>
      {leftContent && <div>{leftContent}</div>}
      {children}
      {rightContent && <div>{rightContent}</div>}
    </Component>
  );
});
