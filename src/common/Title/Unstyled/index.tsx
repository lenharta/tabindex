import React from 'react';
import type { IPropsUnstyledTitle } from '../types';

export const UnstyledTitle = React.forwardRef<HTMLHeadingElement, IPropsUnstyledTitle>(
  (props, ref) => {
    const { as = 'h2', children, ...otherProps } = props;
    const baseProps = { ref };
    return React.createElement(as, { ...otherProps, ...baseProps }, children);
  }
);
