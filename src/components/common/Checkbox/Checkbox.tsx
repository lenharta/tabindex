import clsx from 'clsx';
import * as React from 'react';
import { type IconKey, Icon } from '@/components/common/Icon';
import { type InlineInputProps, InlineInput } from '@/components/common/InlineInput';

export type CheckboxProps = InlineInputProps & {
  variant?: 'filled' | 'outlined';
  value?: string;
};

export type CheckboxIndicatorProps = {
  variant?: 'filled' | 'outlined';
  state?: 'checked' | 'unchecked' | 'indeterminate';
};

const CheckboxIndicator = (props: CheckboxIndicatorProps) => {
  const { state = 'unchecked', variant = 'filled' } = props;
  const iconKey = ['checkbox', state, variant].join('_');
  return <Icon size="sm" name={iconKey as IconKey} />;
};

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>((props, ref) => {
  const { size, alignment, scheme, variant, error, info, label, ...otherProp } = props;
  const css = clsx('Checkbox', { [`Checkbox--${variant}`]: variant });
  return (
    <InlineInput
      size={size}
      info={info}
      label={label}
      error={error}
      scheme={scheme}
      className={css}
      alignment={alignment}
      {...otherProp}
      ref={ref}
    >
      <CheckboxIndicator />
    </InlineInput>
  );
});
