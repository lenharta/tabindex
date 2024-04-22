import clsx from 'clsx';
import React from 'react';
import { TBDX } from '@/types';
import { mergeProps } from '../utils';

export interface DividerProps extends Omit<TBDX.DividerProps, 'children'> {
  label?: React.ReactNode | undefined;
  className?: string | undefined;
}

const defaultProps: Partial<DividerProps> = {
  orientation: 'horizontal',
  position: 'center',
  theme: 'default',
};

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
  const { className, label, ...otherProps } = props;
  const { size, theme, position, orientation, ...forwardedProps } = mergeProps(
    otherProps,
    defaultProps
  );
  return (
    <div
      {...forwardedProps}
      ref={ref}
      role="separator"
      className={clsx('Divider', className)}
      data-orientation={orientation}
      data-with-label={label !== undefined ? true : undefined}
      data-position={position}
      data-theme={theme}
      data-size={size}
    >
      {label && <span className="Divider-label">{label}</span>}
      <div className="Divider-seperator" />
    </div>
  );
});

Divider.displayName = 'common/Divider';
