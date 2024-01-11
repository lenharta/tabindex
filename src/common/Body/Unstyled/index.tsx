import * as React from 'react';
import { factory } from '@/utils/create-factory';
import { type TFactoryUnstyledBody } from '@/common/Body';

export const UnstyledBody = factory<TFactoryUnstyledBody>((props, ref) => {
  const { children, ...otherProps } = props;
  return React.createElement('p', { ref, ...otherProps }, children);
});
