import * as React from 'react';
import { UnstyledButton } from '../Button/Unstyled';
import { type Factory, factory } from '@/utils/create-factory';

type ControlFactory = Factory<{
  props: React.ButtonHTMLAttributes<HTMLButtonElement>;
  ref: HTMLButtonElement;
}>;

export const Control = factory<ControlFactory>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <UnstyledButton {...otherProps} ref={ref}>
      {children}
    </UnstyledButton>
  );
});