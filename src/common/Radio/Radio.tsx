import * as React from 'react';
import { InlineInput } from '../InlineInput';
import { type Factory, factory } from '@/utils/create-factory';
import { createModifierClasses } from '@/utils/create-modifier-classes';

export type TPropsRadio = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface IPropsRadioProps extends TPropsRadio {
  size?: 'sm' | 'md' | 'lg';
  align?: 'start' | 'center' | 'end';
}

export type RadioFactory = Factory<{
  props: IPropsRadioProps;
  ref: HTMLButtonElement;
}>;

export const Radio = factory<RadioFactory>((props, ref) => {
  const { children, className, align = 'start', size = 'sm', ...otherProps } = props;

  const css = createModifierClasses({
    base: 'Radio',
    modifiers: { align, size },
    className,
  });

  return (
    <InlineInput {...otherProps} ref={ref} className={css}>
      {children}
    </InlineInput>
  );
});
