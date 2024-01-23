import clsx from 'clsx';
import * as React from 'react';

// TODO: Loader + loader props

export type ButtonBaseProps = React.ComponentPropsWithoutRef<'button'> & {
  loading?: boolean;
  readonly?: boolean;
  disabled?: boolean;
};

export const UnstyledButton = React.forwardRef<HTMLButtonElement, ButtonBaseProps>((props, ref) => {
  const { loading, disabled, readonly, children, ...otherProps } = props;

  const dataProps = {
    'data-loading': loading,
    'data-disabled': disabled,
    'data-readonly': readonly,
  };

  const ariaProps = {
    'aria-disabled': disabled,
    'aria-readonly': readonly,
  };

  return (
    <button {...otherProps} {...dataProps} {...ariaProps} ref={ref}>
      {loading ? <span>Loading...</span> : children}
    </button>
  );
});

export interface ButtonProps extends ButtonBaseProps {
  size?: 'small' | 'medium' | 'large';
  scheme?: 'default' | 'secondary' | 'action';
  variant?: 'default' | 'outlined' | 'tonal' | 'ghost' | 'text';
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    size = 'sm',
    scheme = 'default',
    variant = 'default',
    children,
    leftContent,
    rightContent,
    ...otherProps
  } = props;

  const classes = clsx('Button', {
    [`Button--${size}`]: size,
    [`Button--${scheme}`]: scheme,
    [`Button--${variant}`]: variant,
  });

  return (
    <UnstyledButton {...otherProps} ref={ref} className={classes}>
      {leftContent && <div data-position="left">{leftContent}</div>}
      {children}
      {rightContent && <div data-position="right">{rightContent}</div>}
    </UnstyledButton>
  );
});
