import * as React from 'react';
import { type Factory, factory } from '@/utils/create-factory';

type RadioGroupFactory = Factory<{
  props: React.HTMLAttributes<HTMLDivElement>;
  ref: HTMLDivElement;
}>;

export const RadioGroup = factory<RadioGroupFactory>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref}>
      {children}
    </div>
  );
});
