import clsx from 'clsx';
import * as React from 'react';
import { type TBDX } from '@/core/theme';
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
  const {
    id,
    size,
    radius,
    text,
    error,
    accent,
    label,
    className,
    isDisabled,
    isReadOnly,
    ...otherProps
  } = props;

  const clxssName = clsx(
    'tbdx-checkbox',
    {
      [`tbdx-checkbox--size-${size}`]: size || defaultProps.size,
      [`tbdx-checkbox--align-${radius}`]: radius,
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
      error={error}
      label={label}
      className={clxssName}
      isReadOnly={isReadOnly}
      isDisabled={isDisabled}
    >
      <Icon name="checkbox_checked" />
    </InlineInput>
  );
});
