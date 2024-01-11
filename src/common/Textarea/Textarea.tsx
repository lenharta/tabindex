import * as React from 'react';
import { type Factory, factory } from '@/utils/create-factory';

type TextareaFactory = Factory<{
  props: React.HTMLAttributes<HTMLTextAreaElement>;
  ref: HTMLTextAreaElement;
}>;

export const Textarea = factory<TextareaFactory>((props, ref) => {
  const { children, ...otherProps } = props;
  return <textarea {...otherProps} ref={ref} />;
});
