import { type TBDX } from '@/core/theme';
import { type Factory, createPolymorphic } from '@/components/factory';
import { ButtonGroup, useButtonContext } from './ButtonGroup';
import { type ButtonBaseProps } from './ButtonUnstyled';
import { cx } from '../utils';

export type ButtonScheme = 'primary' | 'secondary' | 'action';
export type ButtonVariant = 'solid' | 'outlined' | 'tonal' | 'ghost';

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

  const clxssName = cx({
    key: 'tbdx-button',
    props: { size, align, scheme, variant, radius },
    className,
    defaultProps,
    contextProps: {
      size: ctx.size,
      align: ctx.align,
      variant: ctx.variant,
    },
  });

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
      {children && <div>{label || children}</div>}
      {rightContent && <div data-position="right">{rightContent}</div>}
    </Component>
  );
});

Button.displayName = '@TBDX/Button';
Button.Group = ButtonGroup;
