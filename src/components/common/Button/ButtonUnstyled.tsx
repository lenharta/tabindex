import * as React from 'react';
import { type Factory, createPolymorphic } from '@/components/factory';

export interface ButtonBaseProps {
  /** Indicates the `disabled` state of the element */
  disabled?: boolean;

  /** Indicates the `readonly` state of the element */
  readonly?: boolean;

  /** Defines content to the `left` of the label element */
  leftContent?: React.ReactNode;

  /** Defines content to the `right` of the label element */
  rightContent?: React.ReactNode;

  /** Defines a HTML `class` for the label element */
  className?: string;
}

export type ButtonUnstyledFactory = Factory.Config<{
  component: 'button';
  props: ButtonBaseProps;
}>;

export const ButtonUnstyled = createPolymorphic<ButtonUnstyledFactory>((props, ref) => {
  const {
    readonly,
    disabled,
    children,
    leftContent,
    rightContent,
    component,
    className,
    ...otherProps
  } = props;

  const Component = component || 'button';

  return (
    <Component
      ref={ref}
      data-disabled={disabled}
      data-readonly={readonly}
      aria-disabled={disabled}
      aria-readonly={readonly}
      disabled={disabled}
      {...otherProps}
    >
      {leftContent && <div data-position="left">{leftContent}</div>}
      {children && <div>{children}</div>}
      {rightContent && <div data-position="right">{rightContent}</div>}
    </Component>
  );
});
