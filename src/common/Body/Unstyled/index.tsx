import * as React from 'react';
import { createFactory } from '@/utils';
import { type TFactoryUnstyledBody } from '@/common/Body';

export const UnstyledBody = createFactory<TFactoryUnstyledBody>((props, ref) => {
  const { children, ...otherProps } = props;
  return React.createElement('p', { ref, ...otherProps }, children);
});
