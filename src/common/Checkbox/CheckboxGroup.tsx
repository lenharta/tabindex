import * as React from 'react';
import { type Factory, factory } from '@/utils/create-factory';

type CheckboxGroupFactory = Factory<{
  props: React.HTMLAttributes<HTMLDivElement>;
  ref: HTMLDivElement;
}>;

export const CheckboxGroup = factory<CheckboxGroupFactory>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref}>
      {children}
    </div>
  );
});
