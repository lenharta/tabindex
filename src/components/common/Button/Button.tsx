import clsx from 'clsx';
import { type TBDX } from '@/types';
import { ButtonUnstyled } from './ButtonUnstyled';
import { type CORE, createPolymorphicFactory } from '@/components/factory';
import { ButtonGroup, useButtonContext } from './ButtonGroup';
import { mergeProps } from '@/utils';

export type ButtonScheme = 'primary' | 'secondary' | 'action' | 'danger' | 'success' | 'warning';

export type ButtonVariant =
  | 'text'
  | 'solid'
  | 'tonal'
  | 'ghost'
  | 'tonal-outlined'
  | 'ghost-outlined';

export interface ButtonProps {
  size?: TBDX.Size;
  align?: TBDX.Alignment;
  accent?: TBDX.Color;
  radius?: TBDX.Radius;
  scheme?: ButtonScheme;
  variant?: ButtonVariant;
  orientation?: TBDX.Orientation;
  label?: string;
  readOnly?: boolean;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

export type ButtonFactory = CORE.Factory<{
  ref: HTMLButtonElement;
  props: ButtonProps;
  component: 'button';
  components: {
    Group: typeof ButtonGroup;
  };
}>;

const defaultProps: ButtonProps = {
  size: 'sm',
  align: 'center',
  scheme: 'secondary',
  variant: 'solid',
};

export const Button = createPolymorphicFactory<ButtonFactory>((props, ref) => {
  const {
    children,
    className,
    leftContent,
    rightContent,
    component = 'button',
    ...otherProps
  } = props;

  const context = useButtonContext();

  const {
    size,
    align,
    accent,
    radius,
    scheme,
    variant,
    disabled,
    readOnly,
    orientation,
    ...additionalProps
  } = mergeProps({
    props: otherProps,
    context,
    defaultProps,
  });

  const clxss = clsx(
    'tbdx-button',
    {
      [`tbdx-button--size-${size}`]: size,
      [`tbdx-button--align-${align}`]: align,
      [`tbdx-button--accent-${accent}`]: accent,
      [`tbdx-button--radius-${radius}`]: radius,
      [`tbdx-button--scheme-${scheme}`]: scheme,
      [`tbdx-button--variant-${variant}`]: variant,
      [`tbdx-button--orientation-${orientation}`]: orientation,
    },
    className
  );

  return (
    <ButtonUnstyled
      {...additionalProps}
      ref={ref}
      readOnly={readOnly}
      disabled={disabled}
      className={clxss}
      component={component}
      leftContent={leftContent}
      rightContent={rightContent}
    >
      {children}
    </ButtonUnstyled>
  );
});

Button.displayName = '@TBDX/Button';
Button.Group = ButtonGroup;
