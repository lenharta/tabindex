import * as React from 'react';
import { type Factory, factory } from '@/utils/create-factory';

type TextboxFactory = Factory<{
  props: React.HTMLAttributes<HTMLInputElement>;
  ref: HTMLInputElement;
}>;

export const Textbox = factory<TextboxFactory>((props, ref) => {
  const { children, ...otherProps } = props;
  return <input type="text" {...otherProps} ref={ref} />;
});
