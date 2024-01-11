import * as React from 'react';
import { type Factory, factory } from '@/utils/create-factory';

type SwitchGroupFactory = Factory<{
  props: React.HTMLAttributes<HTMLDivElement>;
  ref: HTMLDivElement;
}>;

export const SwitchGroup = factory<SwitchGroupFactory>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref}>
      {children}
    </div>
  );
});
