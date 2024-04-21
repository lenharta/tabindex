import clsx from 'clsx';
import React from 'react';
import { keys } from '@/utils';
import { TBDX } from '@/types';
import {
  mergeProps,
  formatFontSizeClxss,
  formatFontFamilyClxss,
  formatFontWeightClxss,
} from '../utils';

export interface TitleProps extends TBDX.TitleProps, TBDX.BaseProps<'h2'> {
  children?: React.ReactNode | undefined;
}

const defaultProps: Partial<TitleProps> = {
  fz: 8,
  fw: 'reg',
  ff: 'plex',
  theme: 'default',
  variant: 'default',
  component: 'h2',
};

function findTitleComponent(component: TBDX.TitleElement, props: TBDX.TitleElementProps) {
  const prop = keys(props).find((tag) => tag !== undefined);
  if (prop && component !== defaultProps.component) return prop;
  return component;
}

export const Title = React.forwardRef<HTMLHeadingElement, TitleProps>((props, ref) => {
  const { children, ...otherProps } = props;
  const {
    fz,
    fw,
    ff,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    theme,
    clamp,
    variant,
    component,
    className,
    ...forwardedProps
  } = mergeProps(otherProps, defaultProps);

  const Component = findTitleComponent(component, { h1, h2, h3, h4, h5, h6 });

  return (
    <Component
      {...forwardedProps}
      ref={ref}
      data-theme={theme}
      data-variant={variant}
      data-line-clamp={clamp}
      className={clsx(
        'Title',
        formatFontSizeClxss(fz),
        formatFontFamilyClxss(ff),
        formatFontWeightClxss(fw),
        className
      )}
    >
      {children}
    </Component>
  );
});

Title.displayName = 'common/Title';
