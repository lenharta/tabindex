import * as React from 'react';

export type CheckboxGroupValue = {
  value: string[];
  onChange: (value: string[]) => void;
  orientation: 'horizontal' | 'vertical';
};

export const CheckboxGroupContext = React.createContext<CheckboxGroupValue | null>(null);
export const CheckboxGroupPovider = CheckboxGroupContext.Provider;
export const useCheckboxCTX = () => React.useContext(CheckboxGroupContext);
