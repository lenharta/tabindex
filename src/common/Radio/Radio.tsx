import * as React from 'react';
import { InlineInput } from '../InlineInput';
import { type Factory, factory } from '@/utils/create-factory';

type RadioFactory = Factory<{
  props: React.ButtonHTMLAttributes<HTMLButtonElement>;
  ref: HTMLButtonElement;
}>;

export const Radio = factory<RadioFactory>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <InlineInput {...otherProps} ref={ref}>
      {children}
    </InlineInput>
  );
});
