import clsx from 'clsx';
import React from 'react';
import { TBDX } from '@/types';
import { getFontFamilyToken, getFontSizeToken, getFontWeightToken } from '../utils';

export interface TextProps extends TBDX.TextProps, React.ComponentPropsWithoutRef<'p'> {}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>((props, ref) => {
  const {
    fz = 'sm',
    fw = 'reg',
    ff = 'plex',
    theme = 'default',
    variant = 'default',
    className,
    ...otherProps
  } = props;

  return (
    <p
      {...otherProps}
      ref={ref}
      data-theme={theme}
      data-variant={variant}
      className={clsx(
        'Text',
        getFontFamilyToken(ff),
        getFontWeightToken(fw),
        getFontSizeToken(fz),
        className
      )}
    />
  );
});
