import * as React from 'react';
import clsx from 'clsx';

import { type TBDX } from '@/types';
import { type InlineInputProps, Icon, InlineInput } from '@/components/common';
import { useSwitchGroupCTX } from './SwitchGroup';
import { mergeProps } from '@/utils';

export type SwitchInputProps = Omit<InlineInputProps, 'children'> & {
  radius?: TBDX.Radius;
  accent?: TBDX.Color;
  size?: TBDX.Size;
};

const defaultProps: Partial<SwitchInputProps> = {
  size: 'sm',
};

export const Switch = React.forwardRef<HTMLButtonElement, SwitchInputProps>((props, ref) => {
  const context = useSwitchGroupCTX();

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
    'tbdx-switch',
    {
      [`tbdx-switch--size-${size}`]: size,
      [`tbdx-switch--radius-${radius}`]: radius,
      [`tbdx-switch--accent-${accent}`]: accent,
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
      <Icon name="dismiss_circle" />
    </InlineInput>
  );
});
