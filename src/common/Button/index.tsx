import clsx from 'clsx';
import React from 'react';
import { TBDX } from '@/types';
import { useButtonGroupCTX } from './Group';
import { createAttribute, mergeProps } from '../utils';

export interface ButtonProps extends TBDX.ButtonProps {
  label?: string | undefined;
  className?: string | undefined;
  leftContent?: React.ReactNode | undefined;
  rightContent?: React.ReactNode | undefined;
}

const defaultProps: Partial<ButtonProps> = {
  size: 'sm',
  theme: 'default',
  variant: 'default',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, leftContent, rightContent, ...additionalProps } = props;

  const contextProps = useButtonGroupCTX();

  const { size, theme, label, variant, className, ...otherProps } = mergeProps(
    additionalProps,
    defaultProps,
    contextProps
  );

  const clxss = clsx('Button', className);

  const dataProps = {
    [createAttribute('variant')]: variant,
    [createAttribute('theme')]: theme,
    [createAttribute('size')]: size,
  };

  const a11yProps = {
    'aria-label': otherProps['aria-label'] || label,
  };

  return (
    <button {...otherProps} {...dataProps} {...a11yProps} className={clxss} ref={ref}>
      <span className="Button-inner">
        {leftContent && <div data-position="left">{leftContent}</div>}
        {children && <div>{children}</div>}
        {rightContent && <div data-position="right">{rightContent}</div>}
      </span>
    </button>
  );
});

Button.displayName = 'common/Button';
