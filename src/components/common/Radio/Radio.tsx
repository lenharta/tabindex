import * as React from 'react';
import { cx } from '../utils';
import { type TBDX } from '@/core/theme';
import { type InlineInputProps, InlineInput, Icon } from '@/components/common';

export type RadioInputProps = Omit<InlineInputProps, 'children'> & {
  radius?: TBDX.Radius;
  accent?: TBDX.Color;
  size?: TBDX.Size;
};

const defaultProps: Partial<RadioInputProps> = {
  size: 'sm',
};

export const Radio = React.forwardRef<HTMLButtonElement, RadioInputProps>((props, ref) => {
  const {
    id,
    size,
    radius,
    accent,
    text,
    error,
    label,
    className,
    isDisabled,
    isReadOnly,
    ...otherProps
  } = props;

  const clxssName = React.useMemo(
    () =>
      cx({
        key: 'tbdx-radio',
        props: { size, radius, accent },
        defaultProps,
        className,
      }),
    [size, radius, accent]
  );

  return (
    <InlineInput
      {...otherProps}
      id={id}
      ref={ref}
      className={clxssName}
      isReadOnly={isReadOnly}
      isDisabled={isDisabled}
    >
      <Icon name="radio_checked" />
    </InlineInput>
  );
});
