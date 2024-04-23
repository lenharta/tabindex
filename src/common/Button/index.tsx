import clsx from 'clsx';
import React from 'react';
import { TBDX } from '@/types';
import { mergeProps } from '../utils';
import { ButtonGroup, useButtonGroup } from './Group';

export interface ButtonProps extends TBDX.ButtonProps {
  label?: string | undefined;
  children?: React.ReactNode | undefined;
  className?: string | undefined;
  leftContent?: React.ReactNode | undefined;
  rightContent?: React.ReactNode | undefined;
}

export type ButtonExoticComponent = React.ForwardRefExoticComponent<ButtonProps> & {
  Group: typeof ButtonGroup;
};

const defaultProps: Partial<ButtonProps> = {
  size: 'md',
  theme: 'default',
  variant: 'default',
};

const ButtonRender = (props: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
  const { children, leftContent, rightContent, ...otherProps } = props;

  const contextProps = useButtonGroup();

  const { size, block, theme, label, variant, className, ...forwardedProps } = mergeProps(
    otherProps,
    defaultProps,
    contextProps
  );

  return (
    <button
      ref={ref}
      className={clsx('button', className)}
      data-size={size}
      data-theme={theme}
      data-block={block}
      data-variant={variant}
      {...forwardedProps}
    >
      <span className="button-inner">
        {leftContent && <div data-position="left">{leftContent}</div>}
        {children && <div>{children || label}</div>}
        {rightContent && <div data-position="right">{rightContent}</div>}
      </span>
    </button>
  );
};

export const Button = React.forwardRef(ButtonRender) as ButtonExoticComponent;

Button.Group = ButtonGroup;
Button.displayName = 'common/Button';
