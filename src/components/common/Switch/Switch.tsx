import clsx from 'clsx';
import { type TBDX } from '@/types';
import { mergeProps } from '@/utils';
import { Icon, InlineInput } from '@/components/common';
import { type CORE, createStaticFactory } from '@/components/factory';
import { useSwitchGroupCTX } from './SwitchGroup';

export interface SwitchProps {
  readOnly?: boolean;
  error?: string;
  label?: string;
  text?: string;
  radius?: TBDX.Radius;
  accent?: TBDX.Color;
  size?: TBDX.Size;
}

export type SwitchFactory = CORE.Factory<{
  component: 'button';
  props: SwitchProps;
  ref: HTMLButtonElement;
}>;

const defaultProps: SwitchProps = {
  size: 'sm',
};

export const Switch = createStaticFactory<SwitchFactory>((props, ref) => {
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
    disabled,
    readOnly,
    ...otherProps
  } = mergeProps({ props, context, defaultProps });

  const clxss = clsx(
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
      readOnly={readOnly}
      disabled={disabled}
      className={clxss}
    >
      <Icon name="dismiss_circle" />
    </InlineInput>
  );
});
