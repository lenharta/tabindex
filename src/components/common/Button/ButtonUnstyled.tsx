import * as React from 'react';
import { type Factory, createPolymorphic } from '@/components/factory';

export type ButtonUnstyledProps = {
  disabled?: boolean;
  readonly?: boolean;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
};

type ButtonUnstyledFactory = Factory.Config<{
  component: 'button';
  props: ButtonUnstyledProps;
}>;

export const ButtonUnstyled = createPolymorphic<ButtonUnstyledFactory>((props, ref) => {
  const {
    readonly,
    disabled,
    children,
    leftContent,
    rightContent,
    component: Component = 'button',
    ...otherProps
  } = props;

  const dataProps = {
    'data-readonly': readonly,
    'data-disabled': disabled,
  };
  const ariaProps = {
    'aria-disabled': disabled,
    'aria-readonly': readonly,
  };

  return (
    <Component {...otherProps} {...dataProps} {...ariaProps} ref={ref}>
      {leftContent && <div data-position="left">{leftContent}</div>}
      {children && <div>{children}</div>}
      {rightContent && <div data-position="right">{rightContent}</div>}
    </Component>
  );
});
