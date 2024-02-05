import clsx from 'clsx';
import { type TBDX } from '@/types';
import { mergeProps } from '@/utils';
import { Icon, InlineInput } from '@/components/common';
import { type CORE, createStaticFactory } from '@/components/factory';
import { useRadioGroupCTX } from './RadioGroup';

export interface RadioProps {
  readOnly?: boolean;
  error?: string;
  label?: string;
  text?: string;
  radius?: TBDX.Radius;
  accent?: TBDX.Color;
  size?: TBDX.Size;
}

export type RadioFactory = CORE.Factory<{
  component: 'button';
  props: RadioProps;
  ref: HTMLButtonElement;
}>;

const defaultProps: RadioProps = {
  size: 'sm',
};

export const Radio = createStaticFactory<RadioFactory>((props, ref) => {
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
    disabled,
    readOnly,
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
      readOnly={readOnly}
      disabled={disabled}
      className={clxssName}
    >
      <Icon name="radio_checked" />
    </InlineInput>
  );
});
