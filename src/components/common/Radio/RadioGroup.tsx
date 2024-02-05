import * as React from 'react';
import clsx from 'clsx';

import { type TBDX } from '@/types';

export type RadioBaseProps = JSX.IntrinsicElements['fieldset'];

export type RadioGroupProps = RadioBaseProps & {
  label?: string;
  size?: TBDX.Size;
  accent?: TBDX.Color;
  radius?: TBDX.Radius;
};

export type RadioGroupContextValue = {
  size?: TBDX.Size;
  accent?: TBDX.Color;
  radius?: TBDX.Radius;
};

export const RadioGroupCTX = React.createContext({} as RadioGroupContextValue);
export const RadioGroupProvider = RadioGroupCTX.Provider;
export const useRadioGroupCTX = () => React.useContext(RadioGroupCTX);

export const RadioGroup = React.forwardRef<HTMLFieldSetElement, RadioGroupProps>((props, ref) => {
  const { size, radius, accent, label, className, children, ...otherProps } = props;

  const clxssName = clsx(
    'tbdx-radio-group',
    {
      [`tbdx-radio-group--size-${size}`]: size,
      [`tbdx-radio-group--accent-${accent}`]: accent,
      [`tbdx-radio-group--radius-${radius}`]: radius,
    },
    className
  );

  return (
    <fieldset {...otherProps} ref={ref} className={clxssName}>
      {label && <legend>{label}</legend>}
      <RadioGroupProvider value={{ size, accent, radius }}>{children}</RadioGroupProvider>
    </fieldset>
  );
});
