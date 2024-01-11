import * as React from 'react';
import { factory } from '@/utils/create-factory';
import { type TFactoryUnstyledTitle } from '@/common/Title';

export const UnstyledTitle = factory<TFactoryUnstyledTitle>((props, ref) => {
  const { as = 'h3', children, ...otherProps } = props;
  return React.createElement(as, { ref, ...otherProps }, children);
});
