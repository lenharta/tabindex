import * as React from 'react';
import clsx from 'clsx';

import { type TBDX } from '@/types';
import { mergeProps } from '@/utils';
import { useCheckboxGroupCTX } from './CheckboxGroup';
import { type InlineInputProps, Icon, InlineInput } from '@/components/common';

export type CheckboxInputProps = Omit<InlineInputProps, 'children'> & {
  radius?: TBDX.Radius;
  accent?: TBDX.Color;
  size?: TBDX.Size;
};

const defaultProps: Partial<CheckboxInputProps> = {
  size: 'sm',
};

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxInputProps>((props, ref) => {
  const context = useCheckboxGroupCTX();

  const {
    id,
    size,
    text,
    label,
    error,
    accent,
    radius,
    className,
    isDisabled,
    isReadOnly,
    ...otherProps
  } = mergeProps({ props, context, defaultProps });

  const clxssName = clsx(
    'tbdx-checkbox',
    {
      [`tbdx-checkbox--size-${size}`]: size,
      [`tbdx-checkbox--radius-${radius}`]: radius,
      [`tbdx-checkbox--accent-${accent}`]: accent,
    },
    className
  );

  return (
    <InlineInput
      {...otherProps}
      id={id}
      ref={ref}
      text={text}
      label={label}
      error={error}
      className={clxssName}
      isReadOnly={isReadOnly}
      isDisabled={isDisabled}
    >
      <Icon name="checkbox_checked" />
    </InlineInput>
  );
});
