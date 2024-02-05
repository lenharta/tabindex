import * as React from 'react';
import { type CORE, createPolymorphicFactory } from '@/components/factory';

export interface ButtonBaseProps {
  /** Defines the `read-only` state of the element */
  readOnly?: boolean;

  /** Defines content to the `left` of the label element */
  leftContent?: React.ReactNode;

  /** Defines content to the `right` of the label element */
  rightContent?: React.ReactNode;
}

export type ButtonUnstyledFactory = CORE.Factory<{
  ref: HTMLButtonElement;
  props: ButtonBaseProps;
  component: 'button';
}>;

export const ButtonUnstyled = createPolymorphicFactory<ButtonUnstyledFactory>((props, ref) => {
  const {
    readOnly,
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
      aria-disabled={disabled}
      aria-readonly={readOnly}
      data-disabled={disabled}
      data-readonly={readOnly}
      disabled={disabled}
      {...otherProps}
    >
      {leftContent && <div data-position="left">{leftContent}</div>}
      {children && <div>{children}</div>}
      {rightContent && <div data-position="right">{rightContent}</div>}
    </Component>
  );
});
