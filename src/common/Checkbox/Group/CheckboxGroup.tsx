import * as React from 'react';
import type { TOrientation, TSize } from '@/core/types';
import { CheckboxGroupProvider } from '@/common/Checkbox/Group';

interface IPropsInputGroup {
  size: TSize | (string & {}) | undefined;
  orientation: TOrientation | undefined;
  label: string | undefined;
  id: string | undefined;
}

export interface IPropsCheckboxGroup {
  value: string[];
  onChange: (value: string[]) => void;
  orientation: TOrientation | (string & {}) | undefined;
  variant: 'outlined' | 'filled' | undefined;
  size: TSize | (string & {}) | undefined;
}

// const CheckboxGroup = (props: IPropsCheckboxGroup) => {
//   const { size, variant, orientation, ...otherProps } = props;
//   return (
//     <CheckboxGroupProvider value={{ size, variant, orientation }}>
//       <div {...otherProps} className="CheckboxGroup">
//         {children}
//       </div>
//     </CheckboxGroupProvider>
//   );
// };

// CheckboxGroup.displayName = '@tabindex/CheckboxGroup';
