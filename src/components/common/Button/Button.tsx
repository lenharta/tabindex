import clsx from 'clsx';
import { type TBDX } from '@/core/theme';
import { type ButtonBaseProps } from './ButtonUnstyled';
import { type Factory, createPolymorphic } from '@/components/factory';
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
    accent,
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

  const _size = size || defaultProps.size;
  const _align = align || defaultProps.align;
  const _variant = variant || defaultProps.variant;
  const _accent = accent || defaultProps.accent;
  const _scheme = scheme || defaultProps.scheme;
  const _radius = radius || defaultProps.radius;

  const clxssName = clsx(
    'tbdx-button',
    [
      _size ? `tbdx-button--size-${_size}` : _size,
      _align ? `tbdx-button--align-${_align}` : _align,
      _accent ? `tbdx-button--accent-${_accent}` : _accent,
      _scheme ? `tbdx-button--scheme-${_scheme}` : _scheme,
      _radius ? `tbdx-button--radius-${_radius}` : _radius,
      _variant ? `tbdx-button--variant-${_variant}` : _variant,
    ],
    className
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
