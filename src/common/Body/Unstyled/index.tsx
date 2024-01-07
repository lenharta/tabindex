import React from 'react';
import type { TUnstyledBodyComponent } from '../types';

export const UnstyledBody: TUnstyledBodyComponent = React.forwardRef((props, ref) => {
  const { children, ...otherProps } = props;
  return React.createElement('p', { ref, ...otherProps }, children);
});
