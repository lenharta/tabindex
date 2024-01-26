import clsx from 'clsx';
import { ButtonGroup } from './ButtonGroup';
import { type Factory, createPolymorphic } from '@/components/factory';
import { type ButtonUnstyledProps, ButtonUnstyled } from './ButtonUnstyled';

export type ButtonProps = ButtonUnstyledProps & {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  scheme?: 'primary' | 'secondary' | 'action';
  variant?: 'solid' | 'outlined' | 'tonal' | 'ghost';
  alignment?: 'start' | 'center' | 'end';
  label?: string;
};

type ButtonFactory = Factory.Config<{
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
    scheme = 'primary',
    variant = 'solid',
    disabled,
    readonly,
    children,
    alignment = 'start',
    component = 'button',
    leftContent,
    rightContent,
    ...otherProps
  } = props;

  const className = clsx('Button', {
    [`Button--${size}`]: size !== undefined,
    [`Button--${scheme}`]: scheme !== undefined,
    [`Button--${variant}`]: variant !== undefined,
    [`Button--${alignment}`]: alignment !== undefined,
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
