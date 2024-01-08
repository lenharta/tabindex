import React from 'react';
import { IPropsInlineInput, TElementInlineInput } from './types';

const useInlineInputProps = (props: Omit<IPropsInlineInput, 'children'>) => {
  const { id, disabled, readonly, className, ...otherProps } = props;

  const labelProps = { htmlFor: id };

  const dataProps = {
    'data-disabled': disabled,
    'data-readonly': readonly,
  };

  const ariaProps = {
    'aria-disabled': disabled,
    'aria-readonly': readonly,
  };

  const rootProps = { ...otherProps, ...ariaProps, ...dataProps, disabled, id };

  return {
    rootProps,
    labelProps,
  };
};

export const InlineInput = React.forwardRef<TElementInlineInput, IPropsInlineInput>(
  (props, ref) => {
    const { children, ...otherProps } = props;
    return (
      <button {...otherProps} ref={ref}>
        {children}
      </button>
    );
  }
);
