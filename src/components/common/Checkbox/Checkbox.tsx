import clsx from 'clsx';
import { type TBDX } from '@/types';
import { mergeProps } from '@/utils';
import { Icon, InlineInput } from '@/components/common';
import { type CORE, createStaticFactory } from '@/components/factory';
import { useCheckboxGroupCTX } from './CheckboxGroup';

export interface CheckboxProps {
  size?: TBDX.Size;
  align?: TBDX.Alignment;
  radius?: TBDX.Radius;
  accent?: TBDX.Color;
  orientation?: TBDX.Orientation;
  disabled?: boolean;
  readOnly?: boolean;
  error?: string;
  label?: string;
  text?: string;
}

export type CheckboxFactory = CORE.Factory<{
  component: 'button';
  props: CheckboxProps;
  ref: HTMLButtonElement;
}>;

const defaultProps: CheckboxProps = {
  size: 'sm',
  align: 'start',
  orientation: 'vertical',
};

export const Checkbox = createStaticFactory<CheckboxFactory>((props, ref) => {
  const context = useCheckboxGroupCTX();

  const { id, label, error, text, className, disabled, readOnly, ...otherProps } = props;

  const { size, accent, radius, align, orientation, ...additionalProps } = mergeProps({
    props: otherProps,
    context,
    defaultProps,
  });

  const clxss = clsx(
    'tbdx-checkbox',
    {
      [`tbdx-checkbox--size-${size}`]: size,
      [`tbdx-checkbox--align-${align}`]: align,
      [`tbdx-checkbox--radius-${radius}`]: radius,
      [`tbdx-checkbox--accent-${accent}`]: accent,
      [`tbdx-checkbox--orientation-${orientation}`]: orientation,
    },
    className
  );

  return (
    <InlineInput
      {...additionalProps}
      id={id}
      ref={ref}
      text={text}
      label={label}
      error={error}
      readOnly={readOnly}
      disabled={disabled}
      className={clxss}
    >
      <Icon name="checkbox_checked" />
    </InlineInput>
  );
});
