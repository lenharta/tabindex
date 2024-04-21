import clsx from 'clsx';
import React from 'react';
import { TBDX } from '@/types';
import {
  mergeProps,
  formatFontSizeClxss,
  formatFontWeightClxss,
  formatFontFamilyClxss,
} from '../utils';

export interface TextProps extends TBDX.TextProps, TBDX.BaseProps<'p'> {}

const defaultProps: Partial<TextProps> = {
  ff: 'plex',
  theme: 'default',
  variant: 'default',
};

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>((props, ref) => {
  const { children, ...otherProps } = props;

  const {
    fz,
    fw,
    ff,
    block,
    theme,
    clamp,
    inline,
    inherit,
    variant,
    truncate,
    className,
    ...forwardedProps
  } = mergeProps(otherProps, defaultProps);

  return (
    <p
      {...forwardedProps}
      ref={ref}
      data-block={block}
      data-theme={theme}
      data-inline={inline}
      data-inherit={inherit}
      data-variant={variant}
      data-truncate={truncate}
      data-line-clamp={clamp}
      className={clsx(
        'Text',
        formatFontSizeClxss(fz),
        formatFontFamilyClxss(ff),
        formatFontWeightClxss(fw),
        className
      )}
    >
      {children}
    </p>
  );
});
