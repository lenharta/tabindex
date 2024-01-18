import * as React from 'react';
import type { TOrientation, TSize } from '@/core/types';

export interface TContextCheckboxGroupValue {
  orientation: TOrientation | (string & {}) | undefined;
  variant: 'outlined' | 'filled' | undefined;
  size: TSize | (string & {}) | undefined;
}

const CheckboxGroupContext = React.createContext<TContextCheckboxGroupValue | null>(null);
export const CheckboxGroupProvider = CheckboxGroupContext.Provider;
export const useCheckboxGroupContext = () => React.useContext(CheckboxGroupContext);
