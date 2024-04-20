import clsx from 'clsx';
import React from 'react';
import { TBDX } from '@/types';
import {
  createAttribute,
  getFontFamilyToken,
  getFontSizeToken,
  getFontWeightToken,
  mergeProps,
} from '../utils';

export interface TitleProps extends TBDX.TitleProps, React.ComponentPropsWithoutRef<'h2'> {}

const defaultProps: Partial<TitleProps> = {
  fz: 'sm',
  fw: 'reg',
  ff: 'plex',
  theme: 'default',
  variant: 'default',
  component: 'h2',
};

export const Title = React.forwardRef<HTMLHeadingElement, TitleProps>((props, ref) => {
  const { children, ...additionalProps } = props;

  const {
    fz,
    fw,
    ff,
    theme,
    variant,
    className,
    component: Component,
    ...otherProps
  } = mergeProps(additionalProps, defaultProps);

  const clxss = clsx(
    'Title',
    getFontFamilyToken(ff),
    getFontWeightToken(fw),
    getFontSizeToken(fz),
    className
  );

  const dataProps = {
    [createAttribute('theme')]: theme,
    [createAttribute('variant')]: variant,
  };

  return <Component {...otherProps} {...dataProps} ref={ref} className={clxss} />;
});

Title.displayName = 'common/Title';
