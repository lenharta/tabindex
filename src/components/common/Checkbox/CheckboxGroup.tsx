import * as React from 'react';
import clsx from 'clsx';

import { type TBDX } from '@/types';

export type CheckboxBaseProps = JSX.IntrinsicElements['fieldset'];

export type CheckboxGroupProps = CheckboxBaseProps & {
  label?: string;
  size?: TBDX.Size;
  accent?: TBDX.Color;
  radius?: TBDX.Radius;
};

export type CheckboxGroupContextValue = {
  size?: TBDX.Size;
  accent?: TBDX.Color;
  radius?: TBDX.Radius;
};

export const CheckboxGroupCTX = React.createContext({} as CheckboxGroupContextValue);
export const CheckboxGroupProvider = CheckboxGroupCTX.Provider;
export const useCheckboxGroupCTX = () => React.useContext(CheckboxGroupCTX);

export const CheckboxGroup = React.forwardRef<HTMLFieldSetElement, CheckboxGroupProps>(
  (props, ref) => {
    const { size, radius, accent, label, className, children, ...otherProps } = props;

    const clxssName = clsx(
      'tbdx-checkbox-group',
      {
        [`tbdx-checkbox-group--size-${size}`]: size,
        [`tbdx-checkbox-group--accent-${accent}`]: accent,
        [`tbdx-checkbox-group--radius-${radius}`]: radius,
      },
      className
    );

    return (
      <fieldset {...otherProps} ref={ref} className={clxssName}>
        {label && <legend>{label}</legend>}
        <CheckboxGroupProvider value={{ size, accent, radius }}>{children}</CheckboxGroupProvider>
      </fieldset>
    );
  }
);
