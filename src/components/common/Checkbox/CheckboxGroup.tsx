import * as React from 'react';
import clsx from 'clsx';

import { type TBDX } from '@/types';
import { type CORE, createStaticFactory } from '@/components/factory';

export interface CheckboxGroupProps {
  size?: TBDX.Size;
  accent?: TBDX.Color;
  radius?: TBDX.Radius;
  orientation?: TBDX.Orientation;
  label?: string;
}

export type CheckboxGroupFactory = CORE.Factory<{
  component: 'fieldset';
  props: CheckboxGroupProps;
  ref: HTMLFieldSetElement;
}>;

export type CheckboxGroupContextValue = {
  size?: TBDX.Size;
  accent?: TBDX.Color;
  radius?: TBDX.Radius;
};

export const CheckboxGroupCTX = React.createContext({} as CheckboxGroupContextValue);
export const CheckboxGroupProvider = CheckboxGroupCTX.Provider;
export const useCheckboxGroupCTX = () => React.useContext(CheckboxGroupCTX);

export const CheckboxGroup = createStaticFactory<CheckboxGroupFactory>((props, ref) => {
  const {
    size,
    accent,
    radius,
    orientation = 'vertical',
    component: Component = 'fieldset',
    className,
    children,
    label,
    ...otherProps
  } = props;
  const clxss = clsx('tbdx-checkbox-group', className);

  return (
    <Component {...otherProps} ref={ref} className={clxss} data-orientation={orientation}>
      {label && <legend>{label}</legend>}
      <CheckboxGroupProvider value={{ size, accent, radius }}>{children}</CheckboxGroupProvider>
    </Component>
  );
});
