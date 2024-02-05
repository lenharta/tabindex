import * as React from 'react';
import clsx from 'clsx';

import { type TBDX } from '@/types';

export type LabelBaseProps = JSX.IntrinsicElements['label'];

export type LabelProps = LabelBaseProps & {
  size?: TBDX.Alignment;
  align?: TBDX.Alignment;
  accent?: TBDX.Alignment;
};

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const { size, align, accent, children, className, ...otherProps } = props;

  const clxssName = clsx(
    'tbdx-label',
    {
      [`tbdx-label--size-${size}`]: size,
      [`tbdx-label--align-${align}`]: align,
      [`tbdx-label--accent-${accent}`]: accent,
    },
    className
  );

  return (
    <label {...otherProps} className={clxssName} ref={ref}>
      {children}
    </label>
  );
});
