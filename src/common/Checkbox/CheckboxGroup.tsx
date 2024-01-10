import { forwardRef } from 'react';
import type { IPropsCheckboxGroup } from '@/common/Checkbox/types';

export const CheckboxGroup = forwardRef<HTMLDivElement, IPropsCheckboxGroup>((props, ref) => {
  const { children, onChange, ...otherProps } = props;
  return <div {...otherProps} ref={ref}></div>;
});
