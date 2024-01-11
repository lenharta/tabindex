import * as React from 'react';
import { InlineInput } from '../InlineInput';
import { type Factory, factory } from '@/utils/create-factory';

type CheckboxFactory = Factory<{
  props: React.ButtonHTMLAttributes<HTMLButtonElement>;
  ref: HTMLButtonElement;
}>;

export const Checkbox = factory<CheckboxFactory>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <InlineInput {...otherProps} ref={ref}>
      {children}
    </InlineInput>
  );
});
