import * as React from 'react';
import { InlineInput } from '../InlineInput';
import { type Factory, factory } from '@/utils/create-factory';
import { createModifierClasses } from '@/utils/create-modifier-classes';

export type TPropsCheckbox = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface IPropsCheckboxProps extends TPropsCheckbox {
  size?: 'sm' | 'md' | 'lg';
  align?: 'start' | 'center' | 'end';
}

export type CheckboxFactory = Factory<{
  props: IPropsCheckboxProps;
  ref: HTMLButtonElement;
}>;

export const Checkbox = factory<CheckboxFactory>((props, ref) => {
  const { children, className, align = 'start', size = 'sm', ...otherProps } = props;

  const css = createModifierClasses({
    base: 'Checkbox',
    modifiers: { align, size },
    className,
  });

  return (
    <InlineInput {...otherProps} ref={ref} className={css}>
      {children}
    </InlineInput>
  );
});
