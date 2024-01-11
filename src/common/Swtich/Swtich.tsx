import * as React from 'react';
import { InlineInput } from '../InlineInput';
import { type Factory, factory } from '@/utils/create-factory';

type SwitchFactory = Factory<{
  props: React.ButtonHTMLAttributes<HTMLButtonElement>;
  ref: HTMLButtonElement;
}>;

export const Switch = factory<SwitchFactory>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <InlineInput {...otherProps} ref={ref}>
      {children}
    </InlineInput>
  );
});
