import * as React from 'react';
import { UnstyledButton } from '../Button/Unstyled';
import { type Factory, factory } from '@/utils/create-factory';

type CloseFactory = Factory<{
  props: React.ButtonHTMLAttributes<HTMLButtonElement>;
  ref: HTMLButtonElement;
}>;

export const Close = factory<CloseFactory>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <UnstyledButton {...otherProps} ref={ref}>
      {children}
    </UnstyledButton>
  );
});
