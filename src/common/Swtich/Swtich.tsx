import * as React from 'react';
import { InlineInput } from '../InlineInput';
import { type Factory, factory } from '@/utils/create-factory';
import { createModifierClasses } from '@/utils/create-modifier-classes';

export type TPropsSwitch = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface IPropsSwitchProps extends TPropsSwitch {
  size?: 'sm' | 'md' | 'lg';
  align?: 'start' | 'center' | 'end';
}

export type SwitchFactory = Factory<{
  props: IPropsSwitchProps;
  ref: HTMLButtonElement;
}>;

export const Switch = factory<SwitchFactory>((props, ref) => {
  const { children, className, align = 'start', size = 'sm', ...otherProps } = props;

  const css = createModifierClasses({
    base: 'Switch',
    modifiers: { align, size },
    className,
  });

  return (
    <InlineInput {...otherProps} ref={ref} className={css}>
      {children}
    </InlineInput>
  );
});
