import clsx from 'clsx';
import React from 'react';
import { TBDX } from '@/types';
import { mergeProps } from '../utils';
import { useButtonGroup } from './Group';

export interface ButtonProps extends TBDX.ButtonProps {
  label?: string | undefined;
  children?: React.ReactNode | undefined;
  className?: string | undefined;
  leftContent?: React.ReactNode | undefined;
  rightContent?: React.ReactNode | undefined;
}

const defaultProps: Partial<ButtonProps> = {
  size: 'md',
  theme: 'default',
  variant: 'default',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, leftContent, rightContent, ...otherProps } = props;

  const contextProps = useButtonGroup();

  const { size, block, theme, label, variant, className, ...forwardedProps } = mergeProps(
    otherProps,
    defaultProps,
    contextProps
  );

  return (
    <button
      {...forwardedProps}
      ref={ref}
      className={clsx('Button', className)}
      aria-label={otherProps['aria-label'] || label}
      data-variant={variant}
      data-block={block}
      data-theme={theme}
      data-size={size}
    >
      <span className="Button-inner">
        {leftContent && <div data-position="left">{leftContent}</div>}
        {children && <div>{children || label}</div>}
        {rightContent && <div data-position="right">{rightContent}</div>}
      </span>
    </button>
  );
});

Button.displayName = 'common/Button';
