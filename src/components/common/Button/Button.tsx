import * as React from 'react';
import { cx } from '../utils';
import { type TBDX } from '@/core/theme';
import { type Factory, createPolymorphic } from '@/components/factory';
import { type ButtonBaseProps } from './ButtonUnstyled';
import { ButtonGroup, useButtonContext } from './ButtonGroup';

export type ButtonScheme = 'primary' | 'secondary' | 'action' | 'danger' | 'success' | 'warning';
export type ButtonVariant = 'solid' | 'outlined' | 'tonal' | 'ghost' | 'text';

export interface ButtonThemeProps {
  size?: TBDX.Size;
  align?: TBDX.Alignment;
  radius?: TBDX.Radius;
  scheme?: ButtonScheme;
  variant?: ButtonVariant;
}

export interface ButtonProps extends ButtonThemeProps, ButtonBaseProps {
  label?: string;
  isReadOnly?: boolean;
  isDisabled?: boolean;
}

export type ButtonFactory = Factory.Config<{
  component: 'button';
  props: ButtonProps;
  components: {
    Group: typeof ButtonGroup;
  };
}>;

export const defaultProps: Partial<ButtonProps> = {
  variant: 'solid',
  scheme: 'primary',
  align: 'center',
  size: 'sm',
};

export const Button = createPolymorphic<ButtonFactory>((props, ref) => {
  const {
    size,
    align,
    scheme,
    radius,
    variant,
    isReadOnly,
    isDisabled,
    leftContent,
    rightContent,
    component: Component = 'button',
    className,
    children,
    label,
    ...otherProps
  } = props;

  const ctx = useButtonContext();

  const clxssName = React.useMemo(
    () =>
      cx({
        key: 'tbdx-button',
        props: { size, align, variant, scheme, radius },
        className,
        defaultProps,
        contextProps: {
          size: ctx.size,
          align: ctx.align,
          variant: ctx.variant,
        },
      }),
    [size, align, variant, scheme, radius, ctx, className, defaultProps]
  );

  return (
    <Component
      {...otherProps}
      aria-label={label}
      aria-disabled={isDisabled}
      aria-readonly={isReadOnly}
      data-disabled={isDisabled}
      data-readonly={isReadOnly}
      className={clxssName}
      disabled={isDisabled}
      readOnly={isReadOnly}
      ref={ref}
    >
      {leftContent && <div data-position="left">{leftContent}</div>}
      {label || children}
      {rightContent && <div data-position="right">{rightContent}</div>}
    </Component>
  );
});

Button.displayName = '@TBDX/Button';
Button.Group = ButtonGroup;
