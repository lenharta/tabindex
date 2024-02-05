import * as React from 'react';
import clsx from 'clsx';

import { type TBDX } from '@/types';

export type SwitchBaseProps = JSX.IntrinsicElements['fieldset'];

export type SwitchGroupProps = SwitchBaseProps & {
  label?: string;
  size?: TBDX.Size;
  accent?: TBDX.Color;
  radius?: TBDX.Radius;
};

export type SwitchGroupContextValue = {
  size?: TBDX.Size;
  accent?: TBDX.Color;
  radius?: TBDX.Radius;
};

export const SwitchGroupCTX = React.createContext({} as SwitchGroupContextValue);
export const SwitchGroupProvider = SwitchGroupCTX.Provider;
export const useSwitchGroupCTX = () => React.useContext(SwitchGroupCTX);

export const SwitchGroup = React.forwardRef<HTMLFieldSetElement, SwitchGroupProps>((props, ref) => {
  const { size, radius, accent, label, className, children, ...otherProps } = props;

  const clxssName = clsx(
    'tbdx-switch-group',
    {
      [`tbdx-switch-group--size-${size}`]: size,
      [`tbdx-switch-group--accent-${accent}`]: accent,
      [`tbdx-switch-group--radius-${radius}`]: radius,
    },
    className
  );

  return (
    <fieldset {...otherProps} ref={ref} className={clxssName}>
      {label && <legend>{label}</legend>}
      <SwitchGroupProvider value={{ size, accent, radius }}>{children}</SwitchGroupProvider>
    </fieldset>
  );
});
