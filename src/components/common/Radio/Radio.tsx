import * as React from 'react';
import clsx from 'clsx';

import { type TBDX } from '@/types';
import { type InlineInputProps, Icon, InlineInput } from '@/components/common';
import { useRadioGroupCTX } from './RadioGroup';
import { mergeProps } from '@/utils';

export type RadioInputProps = Omit<InlineInputProps, 'children'> & {
  radius?: TBDX.Radius;
  accent?: TBDX.Color;
  size?: TBDX.Size;
};

const defaultProps: Partial<RadioInputProps> = {
  size: 'sm',
};

export const Radio = React.forwardRef<HTMLButtonElement, RadioInputProps>((props, ref) => {
  const context = useRadioGroupCTX();

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
    'tbdx-radio',
    {
      [`tbdx-radio--size-${size}`]: size,
      [`tbdx-radio--radius-${radius}`]: radius,
      [`tbdx-radio--accent-${accent}`]: accent,
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
      <Icon name="radio_checked" />
    </InlineInput>
  );
});
