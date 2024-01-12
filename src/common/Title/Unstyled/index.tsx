import * as React from 'react';
import { createFactory } from '@/utils';
import { type TFactoryUnstyledTitle } from '@/common/Title';

export const UnstyledTitle = createFactory<TFactoryUnstyledTitle>((props, ref) => {
  const { as = 'h3', children, ...otherProps } = props;
  return React.createElement(as, { ref, ...otherProps }, children);
});
