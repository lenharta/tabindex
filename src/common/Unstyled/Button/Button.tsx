import { createPolymorphicFactory } from '@/utils';
import type { PolymorphicFactory } from '@/utils';

export interface IPropsBaseButton {
  loading?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  excludeTabOrder?: boolean;
}

export type TFactoryButton = PolymorphicFactory<{
  props: IPropsBaseButton;
  component: 'button' | 'a';
}>;

const defaultProps: Partial<TFactoryButton['props']> = {};

export const Button = createPolymorphicFactory<TFactoryButton>((props, ref) => {
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
