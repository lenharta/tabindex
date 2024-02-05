import clsx from 'clsx';
import { type TBDX } from '@/types';
import { type ButtonBaseProps } from './ButtonUnstyled';
import { type CORE, createPolymorphicFactory } from '@/components/factory';
import { ButtonGroup, useButtonContext } from './ButtonGroup';

export type ButtonScheme = 'primary' | 'secondary' | 'action' | 'danger' | 'success' | 'warning';

export type ButtonVariant =
  | 'text'
  | 'solid'
  | 'tonal'
  | 'ghost'
  | 'tonal-outlined'
  | 'ghost-outlined';

export interface ButtonThemeProps {
  size?: TBDX.Size;
  align?: TBDX.Alignment;
  accent?: TBDX.Color;
  radius?: TBDX.Radius;
  scheme?: ButtonScheme;
  variant?: ButtonVariant;
}

export interface ButtonProps extends ButtonThemeProps, ButtonBaseProps {
  label?: string;
  readOnly?: boolean;
}

export type ButtonFactory = CORE.Factory<{
  ref: HTMLButtonElement;
  props: ButtonProps;
  component: 'button';
  components: {
    Group: typeof ButtonGroup;
  };
}>;

export const Button = createPolymorphicFactory<ButtonFactory>((props, ref) => {
  const {
    size = 'sm',
    align = 'center',
    accent,
    radius,
    scheme = 'primary',
    variant = 'solid',
    children,
    className,
    readOnly,
    disabled,
    leftContent,
    rightContent,
    component: Component = 'button',
    ...otherProps
  } = props;

  const ctx = useButtonContext();

  const clxssName = clsx(
    'tbdx-button',
    {
      [`tbdx-button--size-${size}`]: size,
      [`tbdx-button--align-${align}`]: align,
      [`tbdx-button--accent-${accent}`]: accent,
      [`tbdx-button--radius-${radius}`]: radius,
      [`tbdx-button--scheme-${scheme}`]: scheme,
      [`tbdx-button--variant-${variant}`]: variant,
    },
    className
  );

  return (
    <Component
      {...otherProps}
      aria-disabled={disabled}
      aria-readonly={readOnly}
      data-disabled={disabled}
      data-readonly={readOnly}
      className={clxssName}
      disabled={disabled}
      ref={ref}
    >
      {leftContent && <div data-position="left">{leftContent}</div>}
      {children}
      {rightContent && <div data-position="right">{rightContent}</div>}
    </Component>
  );
});

Button.displayName = '@TBDX/Button';
Button.Group = ButtonGroup;
