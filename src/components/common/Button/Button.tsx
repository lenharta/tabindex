import clsx from 'clsx';
import { type Factory, createPolymorphic } from '@/components/factory';
import { type TBDXSize, type TBDXAlignment } from '@/core/theme';
import { type ButtonUnstyledProps, ButtonUnstyled } from './ButtonUnstyled';
import { ButtonGroup, useButtonContext } from './ButtonGroup';

export type ButtonProps = ButtonUnstyledProps & {
  label?: string;
  align?: TBDXAlignment;
  size?: TBDXSize;
};

export type ButtonFactory = Factory.Config<{
  component: 'button';
  props: ButtonProps;
  components: {
    Group: typeof ButtonGroup;
  };
}>;

export const Button = createPolymorphic<ButtonFactory>((props, ref) => {
  const {
    size = 'sm',
    label,
    align = 'start',
    scheme = 'primary',
    variant = 'solid',
    rightContent,
    leftContent,
    component = 'button',
    children,
    disabled,
    readonly,
    ...otherProps
  } = props;

  const ctx = useButtonContext();

  const className = clsx('Button', {
    [`Button--${size}`]: size !== undefined,
    [`Button--${scheme}`]: scheme !== undefined,
    [`Button--${variant}`]: variant !== undefined,
    [`Button--${align}`]: align !== undefined,
  });

  return (
    <ButtonUnstyled
      ref={ref}
      readonly={readonly}
      disabled={disabled}
      className={className}
      component={component}
      leftContent={leftContent}
      rightContent={rightContent}
      {...otherProps}
    >
      {label || children}
    </ButtonUnstyled>
  );
});

Button.displayName = '@TBDX/Button';
Button.Group = ButtonGroup;
