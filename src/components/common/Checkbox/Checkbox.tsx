import clsx from 'clsx';
import { type TBDX } from '@/types';
import { mergeProps } from '@/utils';
import { Icon, InlineInput } from '@/components/common';
import { type CORE, createStaticFactory } from '@/components/factory';
import { useCheckboxGroupCTX } from './CheckboxGroup';

export interface CheckboxProps {
  readOnly?: boolean;
  error?: string;
  label?: string;
  text?: string;
  radius?: TBDX.Radius;
  accent?: TBDX.Color;
  size?: TBDX.Size;
}

export type CheckboxFactory = CORE.Factory<{
  component: 'button';
  props: CheckboxProps;
  ref: HTMLButtonElement;
}>;

const defaultProps: CheckboxProps = {
  size: 'sm',
};

export const Checkbox = createStaticFactory<CheckboxFactory>((props, ref) => {
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
    disabled,
    readOnly,
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
      readOnly={readOnly}
      disabled={disabled}
      className={clxssName}
    >
      <Icon name="checkbox_checked" />
    </InlineInput>
  );
});
